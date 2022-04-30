type IsTuple<T extends { length: number }> = T extends readonly [infer _F, ...infer _R]
  ? true
  : T['length'] extends 0
  ? true
  : false