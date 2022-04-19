import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase1<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase1<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase1<'foo-Bar-baz'>, 'foo-BarBaz'>>,
  Expect<Equal<CamelCase1<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase1<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase1<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase1<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase1<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase1<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase1<'-'>, '-'>>,
  Expect<Equal<CamelCase1<''>, ''>>,
  Expect<Equal<CamelCase1<'😎'>, '😎'>>,
]
