type MergeType1<O> = { [P in keyof O]: O[P] }
type RequiredByKeys<T, K = keyof T> =
  MergeType1<
    Required<
      {
        [P in keyof T as P extends K ? P : never]: T[P]
      }
    >
    &
    {
      [P in keyof T as P extends K ? never : P]?: T[P]
    }
  >;
