// DESAFIO 01: Produto

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public getInformacoes(): string {
    return `${this.nome} de R$ ${this.getPrecoComDesconto().toFixed(
      2
    )} com desconto de ${this.desconto * 100}%`
  }

  private getPrecoComDesconto(): number {
    return this.preco - this.preco * this.desconto
  }
}

const sapato = new Produto('Tênis Nike', 500.0, 0.1)
const armario = new Produto('Armário de Cozinha', 350.0)

console.log(sapato.getInformacoes())
