// Shared copy and facts. Every page and the PDF read from this file.
const site = {
  name: 'Kate Terraccino',
  positioning: 'Product direction, design, and technical evaluation for enterprise infrastructure.',
  description: 'Kate Terraccino leads design and research for IBM LinuxONE and Linux on Z, sets product and platform direction from client research and technical evaluation, and builds AI systems independently.',
  email: 'kateterraccino@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kateterraccino/',
  location: 'Connecticut, United States',
  revision: '2026.10',
  partNumber: 'KT-2014-HCI',
};
export const restrictedNote = 'Some figures and dates are omitted until the product is generally available.';

// Specification sheet on the home page. Rows read top to bottom.
export const spec = [
  { term: 'Designation', detail: 'Senior design and research lead, IBM LinuxONE and Linux on Z.' },
  { term: 'Function', detail: 'Sets product and platform direction from client research, design, and technical evaluation. Builds and manages the teams that do the work.' },
  { term: 'Started', detail: 'October 2015 at IBM. Front-end development before that.' },
  { term: 'Interfaces', detail: 'APIs, virtualization, containers, networking, storage, server hardware, hybrid cloud patterns.' },
  { term: 'Teams founded', detail: 'Two. The z/OS hybrid cloud design and research team, grown from 2 to 8 people. The LinuxONE design and research practice, grown from 0 to 6.' },
  { term: 'Largest team led', detail: '18 people, at the peak of the hybrid cloud portfolio.' },
  { term: 'Background processes', detail: 'Four AI systems that run on my own hardware and time. Listed in section 05.' },
  { term: 'Education', detail: 'B.S. in Computer Science and Human-Computer Interaction, University of Rochester, 2014.' },
  { term: 'Location', detail: 'Connecticut, United States.' },
  { term: 'Known limitation', detail: 'Does not publish adoption, revenue, or performance figures for products that are not generally available.' },
];

// Counts the site can state without product telemetry. Each has a source.
export const counts = [
  { value: '11', unit: 'years', label: 'at IBM, across five roles and three platform areas', source: 'Employment dates' },
  { value: '2', unit: 'teams', label: 'founded from zero and grown into practices', source: 'Headcount records' },
  { value: '18', unit: 'people', label: 'on the largest team I managed', source: 'Headcount at peak' },
  { value: '4', unit: 'products', label: 'reached general availability with my team’s design and research', source: 'Release records' },
  { value: '≈30', unit: 'clients', label: 'in the LinuxONE client council I founded', source: 'Council membership' },
  { value: '1', unit: 'proposal', label: 'became a funded product team: IBM Launchpad for LinuxONE', source: 'Organizational commitment' },
  { value: '≈5', unit: 'products', label: 'I shipped front-end code for before moving into leadership', source: 'Early IBM work' },
  { value: '4', unit: 'systems', label: 'running independently on my own hardware', source: 'Section 05' },
];

export const experience = [
  { version: '2024', period: '2024 to present', role: 'Senior design and research lead', area: 'IBM LinuxONE and Linux on Z', changes: [
    ['Added', 'A design and research practice for LinuxONE, built from zero and grown to six people.'],
    ['Added', 'A client council of about 30 clients, with recurring virtual sessions and one in-person event each year.'],
    ['Added', 'The client research and technical feasibility case that became IBM Launchpad for LinuxONE, now a funded product team.'],
    ['Changed', 'Scope of the role to include product and platform strategy, without the product manager title.'],
  ] },
  { version: '2023', period: '2023 to 2024', role: 'Senior design and research manager', area: 'AIOps on Z', changes: [
    ['Changed', 'Managed a nine-person design and research team at portfolio level, through product leads rather than directly.'],
  ] },
  { version: '2019', period: '2019 to 2023', role: 'Senior design and research manager', area: 'z/OS hybrid cloud', changes: [
    ['Added', 'Headcount. Advocated for and grew the core team from 2 to 8 people, with a peak of 18.'],
    ['Shipped', 'Four hybrid cloud products to general availability, including the IBM Z and Cloud Modernization Stack.'],
  ] },
  { version: '2017', period: '2017 to 2018', role: 'UX researcher', area: 'IBM', changes: [
    ['Added', 'User research, alongside the design and development role.'],
  ] },
  { version: '2015', period: '2015 to 2019', role: 'UX designer and front-end developer', area: 'IBM', changes: [
    ['Shipped', 'Front-end features across about five enterprise products.'],
  ] },
  { version: '2015', period: '2015', role: 'UI developer', area: 'Spiceworks, Austin, Texas', changes: [
    ['Added', 'First role after university, building user interfaces for an IT management product.'],
  ] },
  { version: '2014', period: '2014', role: 'B.S. in Computer Science and Human-Computer Interaction', area: 'University of Rochester', changes: [
    ['Completed', 'Computer science with a focus on how people use what gets built.'],
  ] },
];
export default site;
