// type GetOneKey<T extends any[]> =
//   T extends [infer F, infer R]
//   ? F
//   : never
// type GetValue<T extends any[]> =
//   T extends [infer F, infer R]
//   ? R
//   : never

// type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

// type TupleToObject1<T extends any[]> = {
//   [P in T[number]]: T[P]
// }
// type ModelTest = TupleToObject1<ModelEntries> 

// type testKey = GetOneKey<ModelEntries>
// type testValue = GetValue<ModelEntries>

// type ObjectFromEntries<T extends any[]> = {
//   [P in testKey]: 
// }
// type pTest = ObjectFromEntries<ModelEntries>
type ObjectFromEntries<T extends [symbol | string | number, any]> = {
  [P in T as P[0]]: P[1]
}