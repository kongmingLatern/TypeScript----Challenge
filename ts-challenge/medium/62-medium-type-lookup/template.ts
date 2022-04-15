type LookUp<U extends { type: string }, T extends string> = U extends { type: T } ? U : never
