import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type p = ObjectEntries<Partial<Model>>
type r = string extends undefined ? true : false
type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
]
