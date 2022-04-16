type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimLeft<Rest> : S

// type TrimStart<T extends string> = T extends ` ${infer Rest}` ? TrimStart<Rest> : T;

// type TT = TrimStart<'   Vue React Angular'>; // 'Vue React Angular'


// 引入了模板字符串