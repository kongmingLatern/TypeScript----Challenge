type Helper<S, A extends number[]> =
  S extends '1'
  ? [...A, ...A, 0]
  : [...A, ...A]

type BinaryToDecimal<
  S extends string,
  A extends number[] = []
  > =
  S extends `${infer First}${infer Rest}`
  ? BinaryToDecimal<Rest, Helper<First, A>>
  : A['length']

type p = Helper<1, [0, 1, 1]>