type Trim<T extends string> = T extends
  `${" " | "\t" | "\n"}${infer Rest}`
  | `${infer Rest}${" " | "\t" | "\n"}`
  ? Trim<Rest>
  : T
