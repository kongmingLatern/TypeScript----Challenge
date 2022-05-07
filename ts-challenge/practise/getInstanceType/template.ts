type getInstanceType<
  T extends new (...args: any) => unknown
  > =
  T extends new (...args: infer R) => infer P
  ? P
  : never