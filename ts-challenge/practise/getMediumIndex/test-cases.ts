import { Equal, Expect } from "@type-challenges/utils";



type cases = [
  Expect<Equal<getMediumElement<[]>, []>>,
  Expect<Equal<getMediumElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<getMediumElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<getMediumElement<[() => string]>, [() => string]>>,
  Expect<Equal<getMediumElement<[() => string, () => number]>, [() => string, () => number]>>,
  Expect<Equal<getMediumElement<[never]>, [never]>>
]
// @ts-expect-error
type error = getMediumElement<1, 2, 3>