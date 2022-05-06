type CurryingHelper<T> =
  T extends (...args: infer L) => infer R
  ? L extends [infer _, ...infer Rest]
  ? (a: _) => CurryingHelper<(...args: Rest) => R>
  : R
  : T

declare function Currying<T>(fn: T): CurryingHelper<T>
