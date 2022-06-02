type DeepObjectToUniq<
  O extends object,
  Path extends any[] = [O]
  > =
  O extends Record<string, any>
  ? {
    [key in keyof O]: DeepObjectToUniq<O[key], [...Path, key]>
  }
  & {
    [key in symbol]: Path
  }
  : O