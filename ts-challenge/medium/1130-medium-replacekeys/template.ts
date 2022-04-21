type ReplaceKeys<U, T, Y extends Record<string, unknown>, S = U> = U extends S
  ? Extract<keyof U, T> extends never
  ? U
  : {
    [K in keyof U]: K extends Extract<keyof U, T> ? K extends keyof Y ? Y[K] : never : U[K]
  }
  : never
