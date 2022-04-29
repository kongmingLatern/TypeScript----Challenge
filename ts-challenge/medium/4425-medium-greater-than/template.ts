type GreaterThan<
  T extends number,
  U extends number,
  R extends unknown[] = []
  > = T extends R['length']
  ? false
  : U extends R['length']
  ? true
  : GreaterThan<T, U, [...R, any]>