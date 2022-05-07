type GetThisParameterType<T>
  = T extends (this: infer ThisType, ...args: any[]) => any
  ? ThisType
  : unknown; 