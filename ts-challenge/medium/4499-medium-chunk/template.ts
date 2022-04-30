// your answers
type Chunk<T, L extends number, C extends unknown[] = [], A extends unknown[] = []> =
  C['length'] extends L
  ? Chunk<T, L, [], [...A, C]>
  : T extends [infer F, ...infer R]
  ? Chunk<R, L, [...C, F], A>
  : [...A, ...C['length'] extends 0 ? [] : [C]]