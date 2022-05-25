type SplitStr = ' ' | '.' | ','
type CapitalizeWords<
  S extends string,
  F extends string = ''
  > =
  S extends `${infer first}${infer Middle}${infer last}`
  ? Middle extends SplitStr
  ? `${Capitalize<`${F}${first}`>}${Middle}${CapitalizeWords<last>}`
  : CapitalizeWords<`${Middle}${last}`, `${F}${first}`>
  : Capitalize<`${F}${S}`>;
// type CapitalizeWords<
//   T extends string,
//   F extends string = ''
//   > =
//   T extends `${infer First}${infer Middle}${infer Rest}`
//   ? Middle extends SplitFlag
//   ? `${Capitalize<First>}${Middle}${CapitalizeWords<Rest>}`
//   : CapitalizeWords<`${Middle}${Rest}`, `${F}${First}`>
//   : CapitalizeWords<Capitalize<First>>
// type test = CapitalizeWords<'foo bar'>
// type test1 = CapitalizeWords<'foo bar hello world'>