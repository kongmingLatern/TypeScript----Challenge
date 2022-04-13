type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

type r = TupleToObject<[1, 2, 3]>

// js 实现
function tupleToObject(arrs: any) {
  // 1. array 里面的 key 是不是 string，number 或者 symbol 类型
  // error
  const obj: any = {}
  arrs.forEach((key: string | number) => {
    obj[key] = key
  });
}

// 重点
// T[number] => 数组 [1, 2, 3]
// [P in T[number]] => p: 1, 2, 3