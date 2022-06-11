type NumberA = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type IsNumber<T extends string, K extends boolean = true> =
  T extends ''
  ? K
  : T extends `${infer F}${infer Rest}`
  ? F extends `${NumberA}`
  ? IsNumber<Rest, true>
  : IsNumber<Rest, false>
  : false

type testNumber = IsNumber<'11$%'>


type ToNumber<T extends string, S extends unknown[] = []> =
  IsNumber<T> extends true
  ? T extends `${S["length"]}`
  ? S["length"]
  : ToNumber<T, [...S, any]>
  : never
