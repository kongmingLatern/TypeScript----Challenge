type Subsequence<T extends unknown[], Res extends unknown[] = []> =
  T extends [infer F, ...infer Rest]
  ? Subsequence<Rest, Res | [...Res, F]>
  : Res
