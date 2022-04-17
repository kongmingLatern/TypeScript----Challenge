type AppendArgument<Fn, A> = Fn extends (...args: infer X) => infer Y
  ? (...args: [...X, A]) => Y
  : never
