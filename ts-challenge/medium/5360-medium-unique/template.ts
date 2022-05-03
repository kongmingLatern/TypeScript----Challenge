type Unique<T extends readonly any[]> = T extends [...infer F, infer R]
  ? R extends F[number]
  ? [...Unique<F>]
  : [...Unique<F>, R]
  : [];