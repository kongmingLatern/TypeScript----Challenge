type AppendArgument<Fn, A> = Fn extends (...args: infer X) => infer Y
  ? (...args: [...X, A]) => Y
  : never


type AppendArgument1<Fn, K> =
  Fn extends (...args: infer X) => infer Y ?
  // 添加参数至 args
  (...args: [...X, K]) => Y
  : never