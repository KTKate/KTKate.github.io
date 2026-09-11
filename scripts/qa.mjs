import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { preview } from 'astro';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const widths=process.env.QA_WIDTHS ? process.env.QA_WIDTHS.split(',').map(Number) : [320,390,768,1024,1440];
const routes=['/','/about/','/work/nexus/','/work/linuxone-practice/','/work/hybrid-cloud/','/print/','/404.html'];
const root=fileURLToPath(new URL('..',import.meta.url));
const out=root+'artifacts/qa';await mkdir(out,{recursive:true});
let server,browser;const results=[],failures=[];const links=new Set();
const note='Some figures and dates are omitted until the product is generally available.';
try {
 server=await preview({root,server:{host:'127.0.0.1',port:4330}});
 const origin=`http://127.0.0.1:${server.port}`;
 const siteRoot=origin+(process.env.BASE_PATH || '/').replace(/\/$/,'');
 browser=await chromium.launch();
 for(const width of widths){
  const context=await browser.newContext({viewport:{width,height:900}});
  const page=await context.newPage();
  for(const route of routes){
   const errors=[];const onError=e=>errors.push(e.message);const onConsole=m=>{if(m.type()==='error') errors.push(m.text())};page.on('pageerror',onError);page.on('console',onConsole);
   const response=await page.goto(siteRoot+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(1700);
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
 const tab=page.locator('#tab-design');await tab.focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator(':focus').getAttribute('id'),'tab-product');assert.equal(await page.locator('#panel-product').isVisible(),true);
 await page.keyboard.press('End');assert.equal(await page.locator(':focus').getAttribute('id'),'tab-combined');await page.keyboard.press('Home');assert.equal(await page.locator(':focus').getAttribute('id'),'tab-design');await page.keyboard.press('ArrowLeft');assert.equal(await page.locator(':focus').getAttribute('id'),'tab-combined');await page.keyboard.press('Tab');assert.equal(await page.locator(':focus').getAttribute('id'),'panel-combined');
 for(const id of ['design','product','technology','combined']){await page.locator('#tab-'+id).click();await page.locator('[data-principles]').screenshot({path:`${out}/principles-${id}-390.png`});}
 const details=page.locator('details').first();await details.locator('summary').focus();await page.keyboard.press('Enter');assert.equal(await details.getAttribute('open'),'');
 await page.emulateMedia({reducedMotion:'reduce'});await page.reload();assert.equal(await page.locator('.stack').first().evaluate(e=>getComputedStyle(e).animationName),'none');assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
 await page.evaluate(()=>document.documentElement.style.fontSize='200%');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'200% text enlargement overflow');await page.screenshot({path:out+'/text-200-percent.png',fullPage:true});
 await page.setViewportSize({width:320,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'320px enlarged text overflow');await page.screenshot({path:out+'/text-200-percent-320.png',fullPage:true});
 const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:320,height:900}});await nojs.goto(siteRoot+'/');assert.equal(await nojs.locator('.panel:visible').count(),4);assert.equal(await nojs.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await nojs.close();
 const linkResults=[];
 for(const href of links){const u=new URL(href);if(u.origin!==origin)continue;const res=await page.request.get(u.href);linkResults.push({path:u.pathname+u.hash,status:res.status()});if(!res.ok())failures.push({brokenLink:href,status:res.status()});if(u.hash){await page.goto(origin+u.pathname);if(!await page.locator(`[id="${decodeURIComponent(u.hash.slice(1))}"]`).count())failures.push({missingAnchor:href});}}
 await page.goto(siteRoot+'/work/nexus/');const nexus=await page.locator('main').innerText();assert(nexus.includes(note));assert(!/7 to 24|three.month|\bminutes\b|November|2026|IBM Z|8 hours/i.test(nexus));
 await page.goto(siteRoot+'/print/');assert((await page.locator('main').innerText()).includes(note));assert.equal(await page.locator('.drafts').count(),1);assert.equal(await page.locator('.case-header h1').count(),3);
 for(const route of ['/work/nexus/','/work/linuxone-practice/','/work/hybrid-cloud/']){const html=await page.request.get(siteRoot+route);const temp=await browser.newPage();await temp.setContent(await html.text());const paragraphs=await temp.locator('.case-body p').allTextContents();for(const p of paragraphs)assert((await page.locator('main').textContent()).includes(p),'Print body differs: '+route);await temp.close();}
 assert.equal((await page.request.get(siteRoot+'/work/aiops-operating-model/')).status(),404);
 assert.equal((await page.request.get(siteRoot+'/.private/linkedin-plan.md')).status(),404);
 assert.deepEqual(await readFile(root+'public/portfolio.pdf'),await readFile(root+'dist/portfolio.pdf'));
 await writeFile(out+'/report.json',JSON.stringify({results,failures,linkResults,checks:['keyboard skip link','tab arrows/Home/End and tabpanel focus','details keyboard toggle','reduced motion','200% text enlargement','no JavaScript fallback','internal routes and anchors','Nexus publication holds','case-study body parity with print','draft exclusion','private file exclusion','PDF byte parity']},null,2));
 console.log(JSON.stringify({pages:results.length,failures,internalLinks:linkResults.length},null,2));
 assert.equal(failures.length,0,'QA failures recorded in artifacts/qa/report.json');
}finally{await browser?.close();await server?.stop();}
