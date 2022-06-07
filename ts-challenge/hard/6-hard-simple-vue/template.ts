declare function SimpleVue<D, C, M>(options: {
  data: (this: undefined) => D,
  computed: C & ThisType<D & C>,
  methods: M & ThisType<D & M & (C extends Record<string, () => infer ReturnType> ? Record<string, ReturnType> : C)>
}): any
