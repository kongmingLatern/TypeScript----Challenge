type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V = unknown>(
    key: Exclude<K, keyof T>,
    value: V
  ): Chainable<T & Record<K, V>>;
  get(): T;
};