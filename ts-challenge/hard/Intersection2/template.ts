type Extract1<T> = T extends unknown[] ? T[number] : T

type Intersection<T extends unknown[]> =
  T extends [infer H, ...infer Rest]
  ? Extract1<H> & Intersection<Rest>
  : unknown

type testIntersection = Intersection<[[1, 2, 3], [2, 3]]>