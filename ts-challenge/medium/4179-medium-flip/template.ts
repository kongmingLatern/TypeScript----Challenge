// your answers
type Flip<T extends {}> = { [K in keyof T as `${T[K] & (string | number | boolean)}`]: `${K & string}` }