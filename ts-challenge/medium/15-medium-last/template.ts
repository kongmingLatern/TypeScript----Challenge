type Last<T extends any[]> = T extends [...infer First, infer Rest]
  ? Rest
  : never

type Last1<T extends any[]> = T extends [infer First, ...infer Rest]
  ? Rest["length"] extends 1 ? Rest[0] : Last<Rest>
  : never

type b = Last<[3, 2, 1]>
type c = Last1<[3, 2, 1]>