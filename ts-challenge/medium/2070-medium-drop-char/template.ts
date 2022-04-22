type DropChar<S extends string, C extends string> =
  S extends `${infer F}${infer Rest}`
  ? F extends C
  ? DropChar<Rest, C>
  : `${F}${DropChar<Rest, C>}`
  : S

type abc = DropChar<'butter fly!', ' '>