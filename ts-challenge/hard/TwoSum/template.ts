type ToArray<
  T extends number,
  A extends number[] = []
  > =
  A['length'] extends T
  ? A
  : ToArray<T, [...A, 1]>;

type diff<
  S extends number,
  U extends number
  > =
  ToArray<S> extends [...ToArray<U>, ...infer R]
  ? R['length']
  : -1;

type TwoSum<
  T extends number[],
  U extends number
  > =
  T extends [T[0], ...infer R]
  ? diff<U, T[0]> extends R[number]
  ? true
  : R extends number[]
  ? TwoSum<R, U>
  : false
  : false