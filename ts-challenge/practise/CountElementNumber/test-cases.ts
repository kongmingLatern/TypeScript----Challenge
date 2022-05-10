import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<CountElementNumber<[1, 2, 3, 4, 4], 4>, 2>>,
  Expect<Equal<CountElementNumber<[1, 2, 2, 3, 4, 5, 6], 5>, 1>>,
  Expect<Equal<CountElementNumber<[1, 2, 2, 3, 4, 5, 6], 0>, 0>>,
]
// @ts-expect-error
type error = CountElementNumber<[1, 2, 3], [1]>