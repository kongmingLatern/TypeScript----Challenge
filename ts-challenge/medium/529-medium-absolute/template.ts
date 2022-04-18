type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer F}` ? F : `${T}`