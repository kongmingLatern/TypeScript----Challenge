type ObjectKeyPaths<T extends object> =
  T extends Record<string, any>
  ? {
    [P in keyof T]: T[P] extends Record<string, any>
    ? P extends string
    ? `${P}.${ObjectKeyPaths<T[P]>}` | P
    : never
    : P
  }[keyof T]
  : never;

type testPath = ObjectKeyPaths<{
  refCount: number
  person: { name: string; age: number }
}>