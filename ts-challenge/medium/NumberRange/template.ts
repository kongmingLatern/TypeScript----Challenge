type NumberRange<
  L extends number,
  H extends number,
  Temp extends number[] = ConstructTuple<L>,
  Result extends unknown[] = [L]
  > = L extends H
  ? Result[number]
  : NumberRange<Temp['length'], H, [...Temp, 1], [...Result, Temp['length']]>