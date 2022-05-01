type Without<T extends unknown[], U, R extends unknown[] = []> =
  U extends unknown[]
  ? T extends [infer L, ...infer V]
  ? L extends U[number]
  ? Without<V, U, R>
  : Without<V, U, [...R, L]>
  : R
  : Without<T, [U], R>