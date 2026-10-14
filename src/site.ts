// Shared facts and copy. Sourced from Kate's LinkedIn profile, the case studies, and her own notes.
const site = {
  name: 'Kate Terraccino',
  tagline: 'Enterprise UX and platform strategy for IBM Z and LinuxONE',
  description: 'Kate Terraccino leads enterprise UX, research, and platform strategy for IBM Z and LinuxONE. Customer discovery, an unreleased enterprise product, four hybrid cloud launches, and independent projects with agents, MCP, and local inference.',
  email: 'kateterraccino@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kateterraccino/',
  location: 'Connecticut, US',
};

// Three proof points, one per discipline. Shown under the opening statement on the home page.
export const proof = [
  { tone: 'violet', name: 'Enterprise experience', text: 'Lead design and research across IBM Z and LinuxONE, with a recurring council of about 30 enterprise clients informing product direction.' },
  { tone: 'amber', name: 'Platform strategy and delivery', text: 'Helped turn customer research into a funded enterprise product initiative. Led design and research teams supporting four hybrid cloud launches.' },
  { tone: 'magenta', name: 'Hands-on AI and development', text: 'Shipped production front-end code. Build and operate independent projects with agents, an MCP gateway, local inference, and third-party APIs.' },
];

// Counts from team and release records.
export const numbers = [
  { big: '11', small: 'years in enterprise infrastructure, from front-end code to product strategy' },
  { big: '2', small: 'design and research practices founded from zero' },
  { big: '18', small: 'people on the largest team I led' },
  { big: '98%', small: 'average team engagement score in the company’s annual assessment' },
  { big: '4', small: 'hybrid cloud products shipped, including the award-winning IBM Z and Cloud Modernization Stack' },
  { big: '≈30', small: 'enterprise clients in the council I founded, still meeting' },
  { big: '9', small: 'person team made effective after the business had stopped relying on it' },
  { big: '4', small: 'AI systems I build and run myself' },
];

// Production code, from the Spiceworks and IBM years.
export const stack = ['React', 'Vue', 'Angular', 'TypeScript', 'Sass', 'Rails', 'Ember', 'D3', 'PostgreSQL'];

export const timeline = [
  { years: '2024 to now', role: 'Design and research leader, product and platform strategy', org: 'LinuxONE and Linux on IBM Z', points: [
    'Founded the design and research practice from zero and grew it to six people.',
    'Founded a council of about 30 enterprise clients that meets through the year and in person annually, so product direction has standing client input instead of one-off interviews.',
    'Helped turn customer research into a funded enterprise product initiative.',
    'Set product and platform strategy across product management, engineering, and design, without holding the product manager title.',
  ] },
  { years: '2023 to 2024', role: 'Senior design and research manager', org: 'AIOps on Z', points: [
    'Took over a nine-person design and research team the business had stopped relying on.',
    'Rebuilt its remit around what product management and engineering needed, put a lead on every product, and made it a team those groups asked for.',
  ] },
  { years: '2019 to 2023', role: 'Senior design and research manager', org: 'z/OS hybrid cloud', points: [
    'Led up to 18 designers, researchers, and content professionals across a portfolio of hybrid cloud products for the core systems behind banks, insurers, and financial systems.',
    'Grew the core team from 2 to 8 so every product and discipline was covered, and held a 98% average engagement score.',
    'Shipped four new hybrid cloud products, including the award-winning IBM Z and Cloud Modernization Stack, which brought on-premises systems to public cloud and standard automation to mainframe applications.',
    'Trained and mentored new designers and researchers alongside experienced professionals.',
  ] },
  { years: '2015 to 2019', role: 'UX designer, front-end developer, and user researcher', org: 'IBM Z analytics', points: [
    'Shipped front-end features across about five enterprise products.',
    'Got an established enterprise team to adopt modern tooling, which led to a Future UI team evaluating and adopting React, Vue, and current Angular.',
    'Designed, prototyped, and built a new file explorer in Angular, TypeScript, and Sass.',
    'Ran user research for the same products from 2017 to 2018.',
  ] },
  { years: '2015', role: 'UI developer', org: 'Spiceworks, Austin', points: [
    'Built an advertising campaign management app in Rails, Ember, D3, Sass, and PostgreSQL, and a REST interface between Ember and Google’s real-time bidders.',
  ] },
  { years: '2014', role: 'B.S., Computer Science and Human-Computer Interaction', org: '', points: [] },
];
export const restrictedNote = 'Some figures and dates are omitted until the product is generally available.';
export default site;
