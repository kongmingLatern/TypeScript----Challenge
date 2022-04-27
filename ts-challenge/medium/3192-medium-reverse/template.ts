type Reverse<T extends unknown[]> =
  T extends [infer F, ...infer Rest]
  ? [...Reverse<Rest>, F]
  : T
