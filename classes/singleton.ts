class Unico {
  private static instance: Unico = new Unico()
  private constructor() {}

  public static getInstance(): Unico {
    return Unico.instance
  }

  public agora() {
    return new Date()
  }
}

console.log(Unico.getInstance().agora())
