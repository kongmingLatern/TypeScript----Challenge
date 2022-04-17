type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends ''
  ? S
  : S extends `${infer X}${From}${infer Y}`
  ? `${ReplaceAll<X, From, To>}${To}${ReplaceAll<Y, From, To>}`
  : S
