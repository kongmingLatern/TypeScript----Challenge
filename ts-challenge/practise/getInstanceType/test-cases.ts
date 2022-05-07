import { Equal, Expect } from "@type-challenges/utils";

interface Person {
  name: string;
}

interface PersonConstructor {
  new(name: string): Person;
}

type cases = [
  Expect<Equal<getInstanceType<PersonConstructor>, Person>>
]