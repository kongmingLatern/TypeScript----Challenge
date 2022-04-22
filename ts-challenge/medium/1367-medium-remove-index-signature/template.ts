type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer strK}` ? strK : never]: T[K];
};