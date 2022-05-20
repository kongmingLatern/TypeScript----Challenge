type Split<S extends string, SEP extends string> =
  S extends `${infer K}${SEP}${infer R}`
  ? [K, ...Split<R, SEP>]
  : S extends `${infer K}`
  ? SEP extends ''
  ? []
  : [K]
  : string[]