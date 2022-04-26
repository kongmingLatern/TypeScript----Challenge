// your answers
type ObjectEntries<T, K extends unknown = keyof T> = K extends keyof T ? [K, Required<T>[K]] : never 
