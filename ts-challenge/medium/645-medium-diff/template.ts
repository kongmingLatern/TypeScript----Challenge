type Diff<O1, O2> = {
  [
  k in keyof (O1 & O2) as k extends keyof O1
  ? k extends keyof O2
  ? never : k
  : k
  ]: (O1 & O2)[k];
};