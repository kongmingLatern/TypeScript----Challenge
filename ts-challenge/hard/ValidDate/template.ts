type Base = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type FillZero<T extends string | number> = `${T}` extends `${Base}` ? `0${T}` : T

type toTuple<T extends number, R extends any[] = []> = R['length'] extends T ? R : toTuple<T, [...R, 1]>

type NumberRange1<
  L extends number,
  H extends number,
  R extends any[] = toTuple<L>,
  Set extends any = never
  > = R['length'] extends H
  ? Set | FillZero<H>
  : NumberRange1<L, H, [...R, 1], Set | FillZero<R['length']>>

type Dates<> = {
  [K in NumberRange1<1, 12>]: `${K}${NumberRange1<1, 31>}`
}

type Special = "0229" | "0230" | `${"02" | "04" | "06" | "09" | "11"}${31}`

type ValidDate<T extends string> = T extends Exclude<Dates[keyof Dates], Special>
  ? true
  : false