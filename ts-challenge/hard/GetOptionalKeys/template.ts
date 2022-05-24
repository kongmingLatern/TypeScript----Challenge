type OptionalKeys<
  T extends object,
  R extends keyof GetOptional<T> = keyof GetOptional<T>
  > = R
