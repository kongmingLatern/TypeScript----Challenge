type MyParameters<T extends (...args: any[]) => void> =
  T extends (...args: infer U) => void ? U : never;
