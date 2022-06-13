type MyReadonly2<T, K extends keyof T = keyof T> =
  Omit<T, K> & Readonly<Pick<T, K>>

// & => 交集 => 忽略的字段 并上 readonly字段
interface Todo1 {
  title: string
  description?: string
  completed: boolean
}
type r21 = Omit<Todo1, 'title' | 'description'>

type r22 = MyReadonly2<Todo1, 'title' | 'description'>

type r23 = Pick<Todo1, 'title' | 'description'>