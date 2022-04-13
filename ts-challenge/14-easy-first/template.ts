// 第一种 常规判断
// type First<T extends any[]> = T extends [] ? never : T[0]

// 第二种 extends
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// 第三种 union + extends
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 第四种 infer
type First<T extends any[]> = T extends [infer First, ...infer other]
  ? First
  : never

// js
// const first = (arr: string | any[]) => {
//   // 判断 arr 是否是一个空数组，如果是，返回 never
//   if (arr.length === 0) {
//     return "never";
//   }
//   return arr[0]
// }


// T[0] extends T[number] => 判断T数组中是否含有T[0] 元素，会通过循环去对比 T[0] => T[1]  T[0] => T[2] ...，直到匹配到就返回

// infer
// T extends [infer First, ...infer other]
//   ? First
//   : never
// 意思是看看在T数组中能否解构出 First，如果能解构出，就返回First，否则返回 never