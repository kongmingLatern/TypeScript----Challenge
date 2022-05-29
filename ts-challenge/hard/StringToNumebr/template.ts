type ToNumber<T extends string, S extends unknown[] = []> =
  T extends `${S["length"]}`
  ? S["length"]
  : ToNumber<T, [...S, any]>
