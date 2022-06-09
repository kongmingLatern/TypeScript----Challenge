type ClassPublicKeys<T extends Record<string, any>, K extends keyof T = keyof T> = K

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }

  getNum() {
    return Math.random()
  }
}

// public 
type testPublic = 'str' extends keyof A ? true : false

// protected
type testProtected = 'num' extends keyof A ? true : false

// private 
type testPrivate = 'bool' extends keyof A ? true : false

type testClass = ClassPublicKeys<A>