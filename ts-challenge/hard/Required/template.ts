type MyRequired<T> = { [K in keyof T]-?: T[K] };
type GetRequired<T, P extends T = MyRequired<T>> = {
  [key in keyof T as T[key] extends P[key] ? key : never]: T[key];
};

// type p = MyRequired<{ foo: number; bar?: string }>