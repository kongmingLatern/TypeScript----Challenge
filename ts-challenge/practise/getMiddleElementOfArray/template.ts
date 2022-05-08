type Tail<T extends unknown[]> =
  T extends [...infer F, infer R]
  ? R
  : never

type getMiddleElement<
  T extends unknown[],
  K extends unknown[] = [],
  U extends unknown[] = []> =
  T extends [First<T>, ...infer Rest, Tail<T>]
  ? Rest["length"] extends 1
  ? Rest
  : Rest["length"] extends 0
  ? [First<T>, Tail<T>]
  : getMiddleElement<Rest, [...K, unknown], [...U, unknown]>
  : T

type GetMediumElement<T extends unknown[]> =
  T["length"] extends 2
  ? T
  : T extends [infer Head, ...infer Rest, infer Tail]
  ? GetMediumElement<Rest>
  : T

type p = GetMediumElement<[1, 2, 3, 6, 4, 5]>