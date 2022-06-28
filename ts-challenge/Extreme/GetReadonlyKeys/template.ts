type GetReadonlyKeys<T> = keyof {
  [
  K in keyof T as (
    <P>() => P extends ({ [P in K]: T[P] }) ? true : never
  ) extends (
    <P>() => P extends ({ readonly [P in K]: T[P] }) ? true : never
  )
  ? K
  : never
  ]: never
};


// type GetReadonlyKeys<T> = keyof {
//   [k in keyof T as Equal<{[x in k]:T[x]},{readonly [x in k]:T[k]}> extends true ? k : never] : T[k]
// }