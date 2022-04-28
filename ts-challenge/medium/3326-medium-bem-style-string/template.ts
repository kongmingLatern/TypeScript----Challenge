type MergeVal<T extends any[], C extends string> = T extends [] ? '' : `${C}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${MergeVal<E, '__'>}${MergeVal<M, '--'>}`