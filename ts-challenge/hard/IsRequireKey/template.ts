type GetKey<T extends Record<string, any>> = {
  [P in keyof T]-?: T[P]
}

type getRequireKeys<
  T extends Record<string, any>,
  K extends T = GetKey<T>
  > = {
    [P in keyof T as T[P] extends K[P] ? P : never]: T[P]
  }

// type IsRequiredKey<
//   T extends Record<string, any>,
//   K extends string
//   > =
//   [K] extends [keyof getRequireKeys<T>]
//   ? true
//   : false



type IsRequiredKey<T, K extends keyof T = keyof T> = T extends {
  [P in K]-?: T[P]
}
  ? true
  : false