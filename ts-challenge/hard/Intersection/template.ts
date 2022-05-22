type UnionToIntersection<U> =
  (U extends U ? (arg: U) => void : never) extends
  (arg: infer T) => void
  ? T
  : never


type test = UnionToIntersection<'foo' | 42 | true>