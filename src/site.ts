// Shared facts and copy. Sourced from Kate's LinkedIn profile, the case studies, and her own notes.
const site = {
  name: 'Kate Terraccino',
  tagline: 'Product and platform strategy for IBM LinuxONE. Design and research leader.',
  description: 'Kate Terraccino leads design and research for IBM LinuxONE and Linux on IBM Z, sets product and platform direction from client research and technical evaluation, and builds AI systems on her own hardware.',
  email: 'kateterraccino@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kateterraccino/',
  location: 'Southbury, Connecticut',
};

// Numbers that come from employment records, team records, and IBM's own assessments. None are product telemetry.
export const numbers = [
  { big: '11', small: 'years at IBM', tilt: '-3deg', color: 'lemon' },
  { big: '98%', small: 'average engagement score for my hybrid cloud team in IBM’s annual assessment', tilt: '2deg', color: 'white' },
  { big: '2 → 8', small: 'core hybrid cloud design team, with a peak of 18 people', tilt: '-1deg', color: 'mint' },
  { big: '4', small: 'hybrid cloud products shipped, including the award-winning IBM Z and Cloud Modernization Stack', tilt: '3deg', color: 'blush' },
  { big: '0 → 6', small: 'LinuxONE design and research practice, founded in 2024', tilt: '-2deg', color: 'white' },
  { big: '≈30', small: 'clients in the LinuxONE client council I founded', tilt: '1deg', color: 'lemon' },
  { big: '1', small: 'proposal that became a funded product team: IBM Launchpad for LinuxONE', tilt: '-3deg', color: 'blush' },
  { big: '4', small: 'AI systems running on my own hardware', tilt: '2deg', color: 'mint' },
];

// Technologies Kate has personally written production code in, from her LinkedIn history.
export const stack = ['Angular 1', 'Dojo', 'Angular 4', 'TypeScript', 'Sass', 'Rails', 'Ember', 'jQuery', 'D3', 'PostgreSQL', 'Webpack', 'React', 'Vue'];

export const timeline = [
  { years: '2024 to now', role: 'Design and research leader, LinuxONE and Linux on IBM Z', org: 'IBM', color: 'tangerine', points: [
    'Founded the LinuxONE design and research practice and grew it from zero to six people.',
    'Founded a client council of about 30 clients, with recurring virtual sessions and one in-person event a year. It exists for design input and future direction, not sales.',
    'Built the client research and technical feasibility case that became IBM Launchpad for LinuxONE, now a funded product team.',
    'Do product and platform strategy work without the product manager title, across product management, engineering, and design.',
  ] },
  { years: '2023 to 2024', role: 'Senior design and research manager, AIOps on Z', org: 'IBM', color: 'blue', points: [
    'Managed a nine-person team of designers and researchers across a portfolio of observability and analytics products for IT operations.',
    'Managed at portfolio level, through product leads, with mentorship and professional development as part of the job.',
  ] },
  { years: '2019 to 2023', role: 'Senior design and research manager, z/OS hybrid cloud', org: 'IBM, Poughkeepsie', color: 'lemon', points: [
    'Led a team of up to 18 designers, researchers, and content professionals across a portfolio of hybrid cloud products for the core systems behind banks, insurers, and financial systems.',
    'Grew the core team from 2 to 8 so every product and discipline was represented.',
    'Shipped four new hybrid cloud products, including the award-winning IBM Z and Cloud Modernization Stack, which let clients bring on-premises systems to public cloud and use standard automation on mainframe applications.',
    'Maintained a 98% average engagement score for the team in IBM’s annual assessment.',
    'Trained and mentored new designers and researchers alongside experienced professionals.',
  ] },
  { years: '2017 to 2018', role: 'User experience researcher', org: 'IBM, Poughkeepsie', color: 'mint', points: [
    'Ran user research alongside the design and development role.',
  ] },
  { years: '2015 to 2019', role: 'UX designer and front-end developer', org: 'IBM, Poughkeepsie', color: 'blush', points: [
    'Promoted new tooling to an established enterprise team, which led to a Future UI team that evaluated and adopted Webpack, React, Vue, and Angular 2 and later.',
    'Designed and implemented features in mainframe analytics products and a microservices app, in Angular 1 and Dojo.',
    'Helped design, prototype, architect, and build a new file explorer in Angular 4, TypeScript, and Sass.',
  ] },
  { years: '2015', role: 'UI developer', org: 'Spiceworks, Austin', color: 'lemon', points: [
    'Built an app for marketing traffickers to manage niche advertising campaigns, in Rails, Ember, jQuery, D3, Sass, and PostgreSQL.',
    'Converted a Rails app into a REST interface between Ember and Google’s real-time bidders.',
    'Contributed to reusable Ember addons.',
  ] },
  { years: '2011 to 2014', role: 'B.S., Computer Science and Human-Computer Interaction', org: 'University of Rochester', color: 'mint', points: [
    'Teaching and research assistant for three years.',
    'Xerox Research Scholar, summer 2013.',
    'IT assistant at the School of Nursing: researched Active Directory integration and resolved faculty and staff support tickets.',
  ] },
];
export const restrictedNote = 'Some figures and dates are omitted until the product is generally available.';
export default site;
