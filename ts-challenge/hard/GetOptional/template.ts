type GetOptional<
  T extends object,
  R extends T = MyRequired<T>
  > = {
    [P in keyof T as T[P] extends R[P] ? never : P]: T[P]
  }