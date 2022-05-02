type IndexOf<T, U, K extends unknown[] = []> =
  T extends [infer F, ...infer Rest]
  ? F extends U
  ? K["length"]
  : IndexOf<Rest, U, [...K, any]>
  : -1
