import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { preview } from 'astro';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const widths=process.env.QA_WIDTHS ? process.env.QA_WIDTHS.split(',').map(Number) : [320,390,768,1024,1440];
const routes=['/','/about/','/side-projects/','/work/nexus/','/work/linuxone-practice/','/work/hybrid-cloud/','/work/aiops-operating-model/','/404.html'];
const root=fileURLToPath(new URL('..',import.meta.url));
const out=root+'artifacts/qa';await mkdir(out,{recursive:true});
let server,browser;const results=[],failures=[];const links=new Set();
const note='Some figures and dates are omitted until the product is generally available.';
try {
 server=await preview({root,server:{host:'127.0.0.1',port:4330}});
 const origin=`http://127.0.0.1:${server.port}`;
 const siteRoot=origin+(process.env.BASE_PATH || '/').replace(/\/$/,'');
 const executablePath=[chromium.executablePath(),process.env.CHROMIUM_PATH].filter(Boolean).find(existsSync);
 browser=await chromium.launch({executablePath});
 for(const width of widths){
  const context=await browser.newContext({viewport:{width,height:900}});
  const page=await context.newPage();
  for(const route of routes){
   const errors=[];const onError=e=>errors.push(e.message);const onConsole=m=>{if(m.type()==='error') errors.push(m.text())};page.on('pageerror',onError);page.on('console',onConsole);
   const response=await page.goto(siteRoot+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(300);
   const diagnostics=await page.evaluate(()=>({
    overflow:document.documentElement.scrollWidth>innerWidth,
    overflowing:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1)&&getComputedStyle(e).position!=='fixed'}).map(e=>e.tagName+'.'+e.className).slice(0,12),
    missingImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
    smallText:[...document.querySelectorAll('p,a,button,li,figcaption,dt,dd')].filter(e=>e.getClientRects().length&&parseFloat(getComputedStyle(e).fontSize)<14).map(e=>({tag:e.tagName,text:e.textContent.slice(0,50),size:getComputedStyle(e).fontSize})),
    links:[...document.querySelectorAll('a[href]')].map(a=>a.href)
   }));
   diagnostics.links.forEach(l=>links.add(l));delete diagnostics.links;
   const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
   const violations=axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));
   const slug=route==='/'?'home':route.replaceAll('/','-');
   await page.screenshot({path:`${out}/${slug}-${width}.png`,fullPage:true});
   const result={route,width,status:response.status(),errors,...diagnostics,violations};results.push(result);
   await writeFile(out+'/pages.json',JSON.stringify(results,null,2));
   if(result.status!==200||errors.length||result.overflow||result.missingImages.length||violations.length||result.smallText.length)failures.push(result);
   page.off('pageerror',onError);page.off('console',onConsole);
  }console.log(`Inspected ${width}px`);await context.close();
 }
 const page=await browser.newPage({viewport:{width:390,height:900}});await page.goto(siteRoot+'/');
 await page.keyboard.press('Tab');assert.equal(await page.locator(':focus').textContent(),'Skip to content');await page.keyboard.press('Enter');assert.equal(await page.locator(':focus').getAttribute('id'),'main');
 assert.equal(await page.locator('.cases > li').count(),4,'Four cases listed');
 assert.equal(await page.locator('script').count(),0,'Public pages ship no JavaScript');
 await page.evaluate(()=>document.documentElement.style.fontSize='200%');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'200% text enlargement overflow');await page.screenshot({path:out+'/text-200-percent.png',fullPage:true});
 await page.setViewportSize({width:320,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'320px enlarged text overflow');
 const linkResults=[];
 for(const href of links){const u=new URL(href);if(u.origin!==origin)continue;const res=await page.request.get(u.href);linkResults.push({path:u.pathname+u.hash,status:res.status()});if(!res.ok())failures.push({brokenLink:href,status:res.status()});if(u.hash){await page.goto(origin+u.pathname);if(!await page.locator(`[id="${decodeURIComponent(u.hash.slice(1))}"]`).count())failures.push({missingAnchor:href});}}
 await page.goto(siteRoot+'/work/nexus/');const nexus=await page.locator('main').innerText();assert(nexus.includes(note));assert(!/7 to 24|three.month|\bminutes\b|November|2026|IBM Z\b|8 hours|\b22\b/i.test(nexus),'Held Launchpad details must not be published');
 assert.equal((await page.request.get(siteRoot+'/work/aiops-operating-model/')).status(),200,'AIOps page published');
 assert.equal((await page.request.get(siteRoot+'/print/')).status(),404,'No print route');
 await writeFile(out+'/report.json',JSON.stringify({results,failures,linkResults,checks:['keyboard skip link','four cases listed','no JavaScript','200% text enlargement','internal routes and anchors','Launchpad publication holds','AIOps published','print route removed']},null,2));
 console.log(JSON.stringify({pages:results.length,failures,internalLinks:linkResults.length},null,2));
 assert.equal(failures.length,0,'QA failures recorded in artifacts/qa/report.json');
}finally{await browser?.close();await server?.stop();}
