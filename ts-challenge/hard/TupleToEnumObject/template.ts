type Enum<T extends readonly (string | symbol | number)[], B extends boolean = false> = {
  readonly [P in T[number]as P extends string ? Capitalize<P> : P]:
  B extends false
  ? P
  : getIndex<T, P>
}

type getIndex<
  T extends readonly any[],
  P,
  K extends unknown[] = []
  > =
  T extends readonly [infer F, ...infer Rest]
  ? [F] extends [P]
  ? K["length"]
  : getIndex<Rest, P, [...K, any]>
  : never

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const

type test111 = Enum<typeof OperatingSystem, true>
type test222 = getIndex<typeof OperatingSystem, "Windows">