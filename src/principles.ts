// The three parts of the job, each with two working rules.
export const principles = [
  { id: 'research', name: 'Find out what clients cannot do', icon: 'ear', color: 'lemon', items: [
    'An hour with a user saves a quarter of rework. Research comes before requirements, not after.',
    'Make the unfamiliar understandable. Terminology, sequence, and system state belong inside the product, not only in the documentation.',
  ] },
  { id: 'technology', name: 'Check whether the interfaces exist', icon: 'plug', color: 'mint', items: [
    'Read the APIs and watch the software run. Demonstrations show which implementation options already exist.',
    'Account for the deployment environment. Access, networking, storage, and hardware requirements shape the experience.',
  ] },
  { id: 'organization', name: 'Get the organization to commit a team', icon: 'flag', color: 'blush', items: [
    'State the decision before creating the artifact. A prototype, roadmap, or study exists to settle a specific question.',
    'Keep clients involved through delivery. Funding is a decision to build. Continued research decides what the team builds next.',
  ] },
];
