type MyOmit<T, K> = {
  [P in MyExclude<keyof T, K>]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}
type abc = MyOmit<Todo, 'description'>


// js
function pick(todo: any, keys: any) {
  const obj: any = {}
  keys.forEach((key: any) => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  });
  return obj
}

// function omit(T, K) {
//   const obj = {}
//   let i
//   for (const key1 in T) {
//     for (i = 0; i < K.length; i++) {
//       if (key1 === K[i]) {
//         continue
//       }
//     }
//     if (i === K.length) {
//       obj[key1] = key1
//     }
//   }
// }