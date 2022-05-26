type ComputedValues<C> = {
  [key in keyof C]: C[key] extends (...args: unknown[]) => infer R ? R : never
}

type ClassToType<C> =
  C extends () => infer T // String/Number/Boolean
  ? T
  : C extends unknown[]
  ? ClassToType<C[number]>
  : C extends new (...args: any) => any // user defined constructors 
  ? InstanceType<C>
  : never

type ComputedProps<P> = {
  [key in keyof P]: P[key] extends { type: infer T }
  ? ClassToType<T>
  : {} extends P[key]
  ? any
  : ClassToType<P[key]>
}

declare function VueBasicProps<P, D, C, M>(options: {
  props: P,
  data: (this: ComputedProps<P>) => D,
  computed: C & ThisType<D & ComputedProps<P>>,
  methods: M & ThisType<D & M & ComputedValues<C> & ComputedProps<P>>
}): any