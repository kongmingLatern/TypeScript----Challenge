type MyExclude<T, U> = T extends U ? never : T

// "b" | "c"
// type r = MyExclude<'a' | 'b' | 'c', 'a'>

// never
// type b = MyExclude<'b','a' | 'b' | 'c' >

// js
// function excludeArr(arr: any[], ex_arr: any[]) {
//   const result: any[] = []
//   arr.forEach((currentValue: any) => {
//     ex_arr.some(target: any, index) => {
//       if (currentValue === target) {
//           return
//         }
//     })
//     if (index !== ex_arr.length) {
//       result.push(currentValue)
//     }
//   })
//   return result
// }

// js
// T: ["a, b, c"]
// u: {"a"}
function myExclude(T: any[], U: { includes: (arg0: any) => any }) {
  // const result = []
  // let j
  // for (let i = 0; i < T.length; i++) {
  //   for (j = 0; j < U.length; j++) {
  //     if (U[j] === T[i]) {
  //       break;
  //     }
  //   }
  //   if (j === U.length) {
  //     result.push(T[i])
  //   }
  // }
  // return result
  T.filter((v: any) => !U.includes(v))
}