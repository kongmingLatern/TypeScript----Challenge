import { Equal, Expect } from '@type-challenges/utils'

class Dong {
  name: string;

  constructor() {
    this.name = "dong";
  }

  hello(this: Dong) {
    return 'hello, I\'m ' + this.name;
  }
}
const dong = new Dong()

type cases = [
  Expect<Equal<GetThisParameterType<typeof dong.hello>, Dong>>
]

