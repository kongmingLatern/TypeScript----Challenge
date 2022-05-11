type CountElementNumberToObject<
  T extends any[]
  > = {
    [P in T[number]]: CountElementNumber<Flatten<T>, P>
  }

type o = CountElementNumberToObject<[1, 2, 3, 4, 5]>