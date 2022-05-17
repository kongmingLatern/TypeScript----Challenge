type Combination<T extends string[]> = Combine<T[number]>
type Combine<T extends string, Copy extends string = T, Res extends string = ''>
  = T extends T
  ? [Exclude<Copy, T>] extends [never]
  ? Res extends ''
  ? T
  : `${Res} ${T}`
  : Combine<Exclude<Copy, T>, Exclude<Copy, T>, Res extends '' ? Res | T : (Res | `${Res} ${T & string}`)>
  : never