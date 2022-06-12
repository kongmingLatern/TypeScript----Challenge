type IsPalindrome<
  T extends string | number,
  P extends unknown[] = GetArr<T>,
  > =
  P extends [infer F, ...infer Rest, infer P]
  ? Rest["length"] extends 2
  ? Rest[0] extends Rest[1]
  ? true
  : false
  : F extends P
  ? IsPalindrome<T, Rest>
  : false
  : true

type GetArr<
  T extends number | string,
  K extends string[] = []
  > =
  `${T}` extends `${infer F}${infer Rest}`
  ? GetArr<Rest, [...K, F]>
  : K
type testArr = GetArr<'abca'>