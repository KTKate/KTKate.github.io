// One color per kind of work, from the original draft's palette: violet for research and leadership, amber for product, magenta for delivery and technology.
export const toneFor = (category: string): string => {
  const c = category.toLowerCase();
  if (c.includes('product')) return 'var(--amber)';
  if (c.includes('delivery') || c.includes('technolog')) return 'var(--magenta)';
  return 'var(--violet)';
};
