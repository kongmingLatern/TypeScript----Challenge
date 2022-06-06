type UnionToIntersect<T> = (T extends T ? (x: T) => unknown : never) extends (x: infer P) => unknown ? P : never;

type DeepPick<T extends Record<string, any>, K extends string> =
  UnionToIntersect<
    K extends K
    ?
    K extends `${infer Key}.${infer ChildrenKey}`
    ? {
      [K in Key]: DeepPick<T[Key], ChildrenKey>
    }
    : K extends keyof T
    ? Pick<T, K>
    : unknown
    : unknown
  >;

type Obj = {
  a: number
  b: string
  c: boolean
  obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}
type testPick = DeepPick<Obj, 'a' | 'obj.e'>