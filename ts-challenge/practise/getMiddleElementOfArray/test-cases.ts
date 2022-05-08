import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<getMiddleElement<[]>, []>>,
  Expect<Equal<getMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<getMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<getMiddleElement<[() => string]>, [() => string]>>,
  Expect<Equal<getMiddleElement<[() => number, "3", [3, 4], 5]>, ["3", [3, 4]]>>,
  Expect<Equal<getMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
  Expect<Equal<getMiddleElement<[never]>, [never]>>,
]
// @ts-expect-error
type error = getMiddleElement<1, 2, 3>