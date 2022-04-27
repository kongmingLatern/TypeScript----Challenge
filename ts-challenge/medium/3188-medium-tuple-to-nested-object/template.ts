type TupleToNestedObject<T extends string[], U> = T extends [infer F, ...infer R]
  ? {
    [P in F as P extends string ? P : never]: R extends string[] ? TupleToNestedObject<R, U> : never
  }
  : U