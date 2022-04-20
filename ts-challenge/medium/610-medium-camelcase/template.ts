// type CamelCase1<S> =
//   S extends `${infer First}-${infer Capital}${infer Rest}`
//   ? Capital extends Capitalize<Capital>
//   ? `${First}-${CamelCase<`${Capital}${Rest}`>}`
//   : `${First}${Capitalize<Capital>}${CamelCase<Rest>}`
//   : S;

type CamelCase1<S extends string> =
  S extends `${infer F}-${infer Capital}${infer Rest}`
  ? Capital extends '-'
  ? `${F}-${CamelCase1<`-${Rest}`>}`
  : Capital extends Capitalize<Capital>
  ? `${F}-${Capital}${CamelCase1<Rest>}`
  : `${F}${Capitalize<Capital>}${CamelCase1<Rest>}`
  : S

type r11 = CamelCase1<'foo--bar----baz'>

// type CamelCase1<S> =
//   S extends `${infer First}-${infer Capital}${infer Rest}`
//   ? Capital extends Capitalize<Capital>
//   ? `${First}-${CamelCase<`${Capital}${Rest}`>}`
//   : `${First}${Capitalize<Capital>}${CamelCase<Rest>}`
// : S;

