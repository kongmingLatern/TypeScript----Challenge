//  check "Start <= T < End"
type IsValidRange<
  T extends number,
  Start extends number,
  End extends number
  > =
  GreaterThan<End, T> extends true
  ? T extends Start
  ? true
  : GreaterThan<T, Start>
  : false

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Res extends unknown[] = []
  > =
  T extends [infer F, ...infer Rest]
  ? IsValidRange<Res['length'], Start, End> extends true
  ? Fill<Rest, N, Start, End, [...Res, N]>
  : Fill<Rest, N, Start, End, [...Res, F]>
  : Res

