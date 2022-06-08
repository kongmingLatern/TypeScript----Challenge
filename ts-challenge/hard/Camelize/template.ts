type Camelize1<T extends Record<string, any>> = {
  [P in keyof T as
  P extends `${infer F}_${infer Rest}`
  ? `${F}${Capitalize<Rest>}`
  : P
  ]
  : T[P] extends [infer F, ...infer Rest]
  ? [Camelize1<F>]
  : T[P] extends Record<string, any>
  ? Camelize1<T[P]>
  : T[P]

}
type testCame =
  Camelize1<{
    some_prop: string
    prop: { another_prop: string }
    array: [{ snake_case: string }]
  }>

type testArrAndRecord = [1, 12, 3] extends Record<string, any> ? true : false // true