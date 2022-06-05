type StringJoin<T0 extends string, T1 extends readonly string[] | readonly [string]> =
  T1 extends [infer P, ...infer S]
  ?
  P extends string
  ?
  S extends string[]
  ?
  `${P}${S['length'] extends 0 ? '' : T0}${StringJoin<T0, S>}`
  : ''
  : ''
  : ''

type JoinFn = <T0 extends string>(sep: T0) => <T extends string[]>(...strings: T) => StringJoin<T0, T>
type testStringJoin = StringJoin<'a', ['a', 'b']> // aab
declare const join: JoinFn