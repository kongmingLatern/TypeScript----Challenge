type AppendToObject<T extends {}, U extends string, V extends unknown> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
