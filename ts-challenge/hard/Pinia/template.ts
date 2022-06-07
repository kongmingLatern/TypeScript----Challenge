// declare function defineStore<I, S, G, A>(store: {
//   id: I,
//   state: () => S,
//   getters: S & ThisType<I & S & (G extends Record<string, () => infer ReturnType> ? Record<string, ReturnType> : G)>
//   actions: () => A,
// }): Record<string, S & I & G & A> 
// declare function defineStore<S, G, A>(store: {
//   id: string
//   state: () => S
//   getters: G & ThisType<S & { [K in keyof G]: G[K] extends () => infer TReturn ? TReturn : G[K] }>
//   actions: A & ThisType<S & G & A>
// }): S & A & { [K in keyof G]: G[K] extends () => infer TReturn ? TReturn : G[K] }
declare function defineStore<
  State,
  Getters,
  Actions,
  DefinedGetters extends Readonly<{
    [Key in keyof Getters]: Getters[Key] extends () => infer Value
    ? Value
    : never
  }>,
  DefinedStore extends State & DefinedGetters & Actions,
  >(store: {
    id: string,
    state: () => State,
    getters: Getters & ThisType<Readonly<DefinedStore>>,
    actions: Actions & ThisType<DefinedStore>,
  }): DefinedStore