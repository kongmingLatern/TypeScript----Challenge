type UnionToIntersectionFn<U> = (
  U extends unknown ? (K: () => U) => void : never
) extends (K: infer I) => void ? I : never;

type GetUnionLast<U> = UnionToIntersectionFn<U> extends () => infer I
  ? I : never;

type Prepend<Tuple extends unknown[], First> = [First, ...Tuple];

type UnionToTuple<
  Union,
  T extends unknown[] = [],
  Last = GetUnionLast<Union>
  > = [Union] extends [never]
  ? T
  : UnionToTuple<Exclude<Union, Last>, Prepend<T, Last>>;

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type testUnion = UnionToTuple<'a' | 'b'>['length']

type testExactValue = ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>