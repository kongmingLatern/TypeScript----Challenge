// 注意顺序，后面元素覆盖前面元素
type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};
