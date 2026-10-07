// Operating rules, grouped by discipline. Shared by the home page and the PDF.
export const principles = [
  { id: 'design', name: 'Design and research', number: '01', items: [
    ['An hour with a user saves a quarter of rework.', 'Research informs requirements before implementation begins, not after.'],
    ['Make the unfamiliar understandable.', 'Explain terminology, sequence, and system state inside the product, not only in the documentation.'],
  ] },
  { id: 'product', name: 'Product', number: '02', items: [
    ['State the decision before creating the artifact.', 'A prototype, roadmap, or study exists to resolve a specific question.'],
    ['Choose a complete user task.', 'Reduce scope while preserving every step needed to finish the task.'],
  ] },
  { id: 'technology', name: 'Technology', number: '03', items: [
    ['Evaluate the interfaces and the working software.', 'APIs and demonstrations show which implementation options already exist.'],
    ['Account for the deployment environment.', 'Access, networking, storage, and hardware requirements shape the experience.'],
  ] },
  { id: 'combined', name: 'All three together', number: '04', items: [
    ['Use research and technical evidence to set direction.', 'A product decision needs a user need, a feasible implementation, and a defined scope.'],
    ['Keep clients involved through delivery.', 'Funding is a decision to build. Continued research informs what the team builds next.'],
  ] },
];
