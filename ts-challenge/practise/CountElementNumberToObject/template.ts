type CountElementNumberToObject<
  T extends any[]
  > = {
    [P in Flatten<T>[number]]: CountElementNumber<Flatten<T>, P>
  }

type o = CountElementNumberToObject<[1, 2, 3, 4, 5]>
type ppp = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, 8], [[[[5]]]]]>
type o = CountElementNumberToObject<[1, 2, 3, 4, 5]>


type a = Flatten<[1, 2, 3, 4, 5, [1, 2, 3, 8]]>