type LengthOfString<S extends string, T extends string[] = []> = S extends ''
  ? T["length"]
  : S extends `${infer F}${infer Rest}`
  ? LengthOfString<Rest, [...T, F]>
  : never
