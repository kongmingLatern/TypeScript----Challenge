type PercentageParser<A extends string, V extends string[] = []> = A extends `${infer L}${infer R}`
  ? L extends '' | '+' | '-'
  ? R extends `${infer N}%`
  ? [L, N, '%']
  : [L, R, '']
  : R extends `${infer N}%`
  ? ['', `${L}${N}`, '%']
  : ['', `${L}${R}`, '']
  : ['', '', ''];
