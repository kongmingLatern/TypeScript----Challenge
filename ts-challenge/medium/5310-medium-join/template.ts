type Join<T, U extends string | number> =
  T extends [infer F, ...infer REST]
  ? REST['length'] extends 0
  ? F
  : F extends string | number
  ? `${F}${U}${Join<REST, U>}`
  : F
  : ''



