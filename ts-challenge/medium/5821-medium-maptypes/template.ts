type FormatMap = {
  'mapFrom': any;
  'mapTo': any
}

type LookUp1<R, T> = R extends { mapFrom: T } ? R : never;

type MapTypes<T, R extends FormatMap> = {
  [K in keyof T]: [T[K]] extends [R['mapFrom']] ? LookUp1<R, T[K]>['mapTo'] : T[K]
}
