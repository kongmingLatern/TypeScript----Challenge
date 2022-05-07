type GetConstructorParameters<
  Constructor extends new (...args: any) => any
  > =
  Constructor extends new (...args: infer F) => any
  ? F
  : never
