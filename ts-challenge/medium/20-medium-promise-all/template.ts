declare function PromiseAll<T extends readonly any[]>(values: readonly [...T]):
  Promise<
    { // keyof T => 拿到数组下标
      [P in keyof T]: (T[P] extends Promise<infer R> ? R : T[P])
    }
  >