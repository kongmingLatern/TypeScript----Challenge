type CountElementNumber<
  T extends unknown[],
  K extends unknown,
  U extends unknown[] = []
  > =
  T extends [infer R, ...infer Rest]
  ? R extends K
  ? CountElementNumber<Rest, K, [...U, unknown]>
  : CountElementNumber<Rest, K, U>
  : U["length"]
type o = CountElementNumber<[1, 2, 3, 4, 4], 4>