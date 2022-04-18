type Flatten<T extends any[]> = T extends [...infer Rest, infer Last]
  ? Last extends any[]
  ? Rest extends [] ? [...Rest, ...Flatten<Last>] : [...Flatten<Rest>, ...Flatten<Last>]
  : T
  : T