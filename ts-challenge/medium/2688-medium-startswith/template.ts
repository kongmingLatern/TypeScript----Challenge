// type StartsWith<T extends string, U extends string, K = [T]> =
//   K extends [infer F, ...infer Rest]
//   ? U extends `${U}${infer Rest}`
//   ? true
//   : false
//   : false

type StartsWith<T extends string, U extends string> =
  T extends `${U}${infer Rest}`
  ? true
  : false
