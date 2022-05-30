type FilterOut<T extends unknown[], K, S extends unknown[] = []> =
  T extends [infer F, ...infer Rest]
  ? [F] extends [K]
  ? FilterOut<Rest, K, S>
  : FilterOut<Rest, K, [...S, F]>
  : S
type testFilter = FilterOut<['a', never], never>
type testFilter1 = FilterOut<[never], never>
type testNever = never extends never ? true : false