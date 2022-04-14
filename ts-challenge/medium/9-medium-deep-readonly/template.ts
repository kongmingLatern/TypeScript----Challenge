type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends Record<string, unknown>
  ? DeepReadonly<T[key]>
  : T[key];
}


type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}
type ab = DeepReadonly<X>