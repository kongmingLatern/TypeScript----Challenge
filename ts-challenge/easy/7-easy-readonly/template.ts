type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
// type arr = {
//   foo: number,
//   bar?: string
// }
// type arrType = MyReadonly<arr>