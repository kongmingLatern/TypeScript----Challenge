type Pop<T extends any[]> = T extends [...infer F, infer R]
  ? F
  : never
