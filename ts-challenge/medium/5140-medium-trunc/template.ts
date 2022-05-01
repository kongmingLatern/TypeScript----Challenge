type Trunc<T extends string | number> =
  `${T}` extends `${infer X}.${infer Rest}` ? X : `${T}`
