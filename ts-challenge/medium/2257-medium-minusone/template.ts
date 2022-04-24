type ArrayOfLength<N extends number, Intermediate extends unknown[] = []> =
  Defer<
    number extends N
    ? unknown[]
    : Intermediate['length'] extends N
    ? Result<Intermediate>
    : ArrayOfLength<N, [unknown, ...Intermediate]>
  >;

type MinusOne<T extends number> =
  x2e3<ArrayOfLength<T>>['value'] extends [unknown, ...infer U]
  ? U['length']
  : never;

interface Defer<T> {
  next: T,
  value: unknown,
}

interface Result<T> extends Defer<Result<T>> {
  value: T,
}

type x1e0<T> = T[Extract<"next", keyof T>];

type x1e1<T> = (
  x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T> extends infer T
  ? x1e0<T>
  : never
  : never
  : never
  : never
  : never
  : never
  : never
  : never
  : never
)

type x1e2<T> = (
  x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T> extends infer T
  ? x1e1<T>
  : never
  : never
  : never
  : never
  : never
  : never
  : never
  : never
  : never
)

type x1e3<T> = (
  x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T> extends infer T
  ? x1e2<T>
  : never
  : never
  : never
  : never
  : never
  : never
  : never
  : never
  : never
)

type x2e3<T> = (
  x1e3<T> extends infer T
  ? x1e3<T>
  : never
)