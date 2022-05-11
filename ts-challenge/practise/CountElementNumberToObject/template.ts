type CountElementNumberToObject<
  T extends any[]
  > = {
    [P in Flatten<T>[number]]: CountElementNumber<Flatten<T>, P>
  }

type test1 = CountElementNumberToObject<[1, 2, 3, 4, 5]>
type test2 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, 8], [[[[5]]]]]>
type test3 = CountElementNumberToObject<[1, 2, 3, 4, 5]>


type a = Flatten<[1, 2, 3, 4, 5, [1, 2, 3, 8]]>