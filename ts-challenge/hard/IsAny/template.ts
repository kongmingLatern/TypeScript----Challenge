type IsAny<T extends string | undefined | unknown> = boolean extends
  (
    T extends string
    ? true
    : false
  )
  ? true
  : false;

type test1 = boolean extends true ? true : false
type test2 = boolean extends false ? true : false
type test3 = boolean extends any ? true : false
// any extends 任何东西 都是 后面 两个的联合类型 (true | false) => false
type test4 = any extends string ? true : false