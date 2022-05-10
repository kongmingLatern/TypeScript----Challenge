type CountElementNumberToObject<
  T extends any[]
  > = {
    [P in T[number]]: CountElementNumber<Flatten<T>, P>
  }
type p = CountElementNumberToObject<[any, any]>