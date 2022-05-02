type IsAny<T> = boolean extends (T extends string ? true : false) ? true : false;

type LastIndexOf<T, U> =
  T extends [...infer F, infer End]
  ? IsAny<U> extends true
  ? IsAny<End> extends true
  ? F['length']
  : LastIndexOf<F, U>
  : U extends End
  ? F['length']
  : LastIndexOf<F, U>
  : -1

