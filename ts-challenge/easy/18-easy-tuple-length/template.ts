type Length<T extends readonly any[]> = T['length']


// js
function getLength(arr: any[]) {
  if (Array.isArray(arr)) {
    return arr.length
  }
}

const constArr = ["123", "1233", "333"] as const
const arr = ["123", "1233", "333"]
// typeof 相当于把 js -> ts
type r3 = typeof constArr // readonly ["123", "1233", "333"]
type r2 = typeof arr // string[]

type StringNumberPair = [string, number]
type stringArr = string[]

type t1 = stringArr["length"] // number
type t2 = StringNumberPair["length"] // 2
// 因为 Tuple 是定长的，所以取出的 length