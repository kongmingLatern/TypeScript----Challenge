type MyReturnType<T extends (...args: any[]) => any> =
  T extends (...args: any[]) => infer P ? P : never

// 注意
//(...args: any[]) => infer P 这是一个整体