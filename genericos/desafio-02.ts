class Fila<T extends number | string> {
  private fila: Array<T>

  constructor(...args: T[]) {
    this.fila = args
  }

  public entrar(item: T): void {
    this.fila.push(item)
  }

  public imprimir(): void {
    console.log('Fila :>> ', this.fila)
  }

  public proximo(): void {
    console.log('Proximo :>> ', this.fila[0])
    this.fila.splice(0, 1)
  }
}

const fila = new Fila<string>()

fila.entrar('Carlos')
fila.entrar('Anna')

fila.imprimir()
fila.proximo()
fila.imprimir()

const filaNumber = new Fila<number>(1, 5, 8, 3, 4, 6)

// filaNumber.imprimir()
// filaNumber.proximo()
