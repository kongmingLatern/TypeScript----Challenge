type StringOfLength<
  T extends string,
  S extends string[] = []
  > =
  T extends ''
  ? S["length"]
  : T extends `${infer F}${infer Rest}`
  ? StringOfLength<Rest, [...S, F]>
  : never



type testStringLength = StringOfLength<'12345678901234'>