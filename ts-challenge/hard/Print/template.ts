type Format<T extends string> =
  T extends `${infer First}%${infer F & ("s" | "d")}${infer Rest}`
  ? F extends 's'
  ? (s1: string) => Format<`${First}${Rest}`>
  : (d1: number) => Format<`${First}${Rest}`>
  : string


type Interaction<T> = 's' & ("s" | "d")