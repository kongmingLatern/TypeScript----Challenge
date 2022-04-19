type CamelCase<S extends string, UPPER extends boolean = false, Res extends string = ''> = S extends `${infer L}${infer R}`
  ? L extends '_'
  ? CamelCase<R, true, Res>
  : UPPER extends true
  ? CamelCase<R, false, `${Res}${Uppercase<L>}`>
  : CamelCase<R, false, `${Res}${Lowercase<L>}`>
  : Res