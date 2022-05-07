type getInstanceType<
  Constructor extends new (...args: any) => unknown
  > =
  Constructor extends new (...args: infer R) => infer P
  ? P
  : never