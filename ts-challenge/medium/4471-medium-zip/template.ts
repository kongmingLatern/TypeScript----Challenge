type Zip<T extends unknown[], K extends unknown[]> =
  T extends [infer F, ...infer Rest]
  ? K extends [infer P, ...infer R]
  ? [[F, P], ...Zip<Rest, R>]
  : []
  : []