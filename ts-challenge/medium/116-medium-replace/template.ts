type Replace<S extends string, From extends string, To extends string> =
  From extends ''
  ? S
  : S extends `${infer X}${From}${infer Y}`
  ? `${X}${To}${Y}`
  : S
type r100 = Replace<'foobar', 'foo', 'bar1'>