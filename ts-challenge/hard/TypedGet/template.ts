type SplitPoint<T extends string, R extends unknown[] = []> =
  T extends `${infer F}.${infer Rest}`
  ? SplitPoint<Rest, [...R, F]>
  : [...R, T]
type testA = SplitPoint<'no.existed'>

type Get<
  T extends Record<string, any>,
  K extends string
  > =
  K extends `${infer Key}.${infer Path}`
  ? Get<T[Key], Path>
  : K extends keyof T
  ? T[K]
  : never;