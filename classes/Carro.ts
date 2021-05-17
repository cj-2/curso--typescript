class Carro {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima
    if (velocidadeValida) this.velocidadeAtual = novaVelocidade
    else this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const carroNovo = new Carro('Ford', 'Ka', 185)
console.log(carroNovo)

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)
console.log(f40)
