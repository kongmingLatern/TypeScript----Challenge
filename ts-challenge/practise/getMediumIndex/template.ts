type Tail<T extends unknown[]> =
  T extends [...infer F, infer R]
  ? R
  : never

type getMediumElement<
  T extends unknown[],
  K extends unknown[] = [],
  U extends unknown[] = []> =
  T extends [First<T>, ...infer Rest, Tail<T>]
  ? Rest["length"] extends 1
  ? Rest
  : Rest["length"] extends 0
  ? [First<T>, Tail<T>]
  : getMediumElement<Rest, [...K, unknown], [...U, unknown]>
  : T

type p = getMediumElement<never>