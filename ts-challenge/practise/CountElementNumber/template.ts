type CountElementNumber<
  T extends unknown[],
  K extends number | symbol | string,
  U extends unknown[] = []
  > =
  T extends [infer R, ...infer Rest]
  ? R extends K
  ? CountElementNumber<Rest, K, [...U, unknown]>
  : CountElementNumber<Rest, K, U>
  : U["length"]
type o = CountElementNumber<[1, 2, 3, 4, 4], 4>