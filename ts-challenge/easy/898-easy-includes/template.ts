import { Equal } from "@type-challenges/utils";

type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
  ? true
  // 递归
  : Includes<Rest, U>
  : false

// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// type r = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>

// js
// function includes(arr , searchVal) {
//   return arr.includes(searchVal)
// }

function includes(arr, searchVal) {
  const [first, ...rest] = arr
  if (arr.length > 0) {
    if (first === searchVal) {
      return true
    } else {
      return includes(rest, searchVal)
    }
  } else {
    return false;
  }

}


// 本题重点
// 递归
