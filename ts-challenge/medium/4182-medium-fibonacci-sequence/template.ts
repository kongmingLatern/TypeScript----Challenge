// 如何实现 Fibonacci ？
// 思路：
// 可以定义一个 数组 U => 1  2
// 可以定义一个 数组 V => 1  3
// 在定义一个数组 I ，用来计算第n个数是谁？【求 I["length"]】
type Fibonacci<
  T extends number,
  U extends unknown[] = [unknown],
  V extends unknown[] = [unknown],
  I extends unknown[] = [unknown, unknown]
  > =
  T extends I['length']
  ? V['length']
  : Fibonacci<T, V, [...U, ...V], [unknown, ...I]>
