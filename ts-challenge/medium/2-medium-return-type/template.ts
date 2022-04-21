type MyReturnType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => infer P ? P : never

// 注意
//(...args: any[]) => infer P 这是一个整体

type UnionToIntersection<T, U = T> =
  (T extends U ? (x: T) => any : never) extends
  (x: infer R) => unknown ? R : never

type a = 'a' | 'b' | 'c' extends 'a' | 'b' | 'c' ? '继承' : '不继承'

type b = UnionToIntersection<{ a: 1 } | { b: 2 } | { c: 3 }>

type UnionToIntersection1<T, U = T> =
  (T extends U ? (x: T) => any : never) extends
  (x: infer R) => unknown ? R : never

type c = UnionToIntersection1<1 | 2 | 3>