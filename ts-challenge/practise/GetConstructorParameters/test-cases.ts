import { Equal, Expect } from "@type-challenges/utils";
class Person { }
interface PersonConstructor {
  new(name: string): Person
}
type cases = [
  Expect<Equal<GetConstructorParameters<PersonConstructor>, [name: string]>>
]