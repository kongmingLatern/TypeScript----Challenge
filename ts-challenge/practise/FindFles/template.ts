type FindDuplicate<T extends any[], A = never, D = never> =
  T extends [infer F, ...infer R]
  ? FindDuplicate<R, A | F, D | (F extends A ? F : never)>
  : D;

type FilterUnique<T extends any[], D = never, R extends any[] = []> =
  T extends [infer F, ...infer L]
  ? FilterUnique<L, D, F extends D ? R : [...R, F]>
  : R;

type FindEles<T extends any[]> = FilterUnique<T, FindDuplicate<T>>;
