type MergeType<O> = {
  [P in keyof O]: O[P]
}
type PartialByKeys<T, K = keyof T> =
  MergeType<
    {
      [P in keyof T as P extends K ? P : never]?: T[P]
    }
    &
    {
      [P in keyof T as P extends K ? never : P]: T[P]
    }
  >;
