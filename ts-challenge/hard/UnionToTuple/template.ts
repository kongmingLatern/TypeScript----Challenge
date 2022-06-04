type UnionToTuple<
  T extends any,
  S extends unknown[] = []
  > =
  T extends T
  ? [...S, T]
  : S
type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type testUnion = UnionToTuple<'a' | 'b'>['length']

type testExactValue = ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>