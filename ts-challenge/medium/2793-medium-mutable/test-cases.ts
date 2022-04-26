import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
type p0000 = Mutable<Readonly<Todo1>>
type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
]
