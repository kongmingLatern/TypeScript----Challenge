type ForOf<T> = {
  [P in keyof T]: T[P]
}

type Merge1<A, B> = ForOf<{
  [K in keyof A as K extends keyof B ? never : K]: A[K]
} & {
    [K in keyof B]: B[K]
  }>

type Assign<T extends Record<string, unknown>, U> =
  U extends [infer L, ...infer R]
  ? Assign<L extends Record<string, unknown> ? Merge1<T, L> : T, R>
  : U extends Record<string, unknown>
  ? Merge1<T, U>
  : T