type FlattenDepth<T extends any[], C extends number = 1, U extends any[] = []> =
  T extends [infer E, ...infer R]
  ? E extends any[]
  ? U['length'] extends C
  ? [E, ...FlattenDepth<R, C, U>]
  : [...FlattenDepth<E, C, [0, ...U]>, ...FlattenDepth<R, C, U>]
  : [E, ...FlattenDepth<R, C, U>]
  : T
