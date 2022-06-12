type IsPalindrome<
  T extends string | number,
  K extends boolean = true
  > =
  GetArr<T> extends [infer F, ...infer Rest, infer P]
  ? Rest["length"] extends 2
  ? Rest[0] extends Rest[1]
  ? true
  : false
  : F extends P
  ? IsPalindrome<Rest, true>
  : false
  : K

type GetArr<
  T extends number | string,
  K extends string[] = []
  > =
  `${T}` extends `${infer F}${infer Rest}`
  ? GetArr<Rest, [...K, F]>
  : K
type testArr = GetArr<'abca'>