// EXEMPLO 01

class Data {
  dia: number; // publico por padrão
  public mes: number; // epecificando
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(27, 3, 1998);

aniversario.dia = 28;
aniversario.mes = 4;
aniversario.ano = 1999;

console.log(aniversario);

const casamento = new Data(); // É possível omitir o "()".
console.log(casamento);

// EXEMPLO 2

class DataEsperta {
  constructor(
    // É possível setar os atributos pelo constructor.
    public dia: number = 1, // Apenas adicionando a vizibildiade.
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

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
    )} com desconto de ${this.desconto * 100}%`;
  }

  private getPrecoComDesconto(): number {
    return this.preco - this.preco * this.desconto;
  }
}

const sapato = new Produto("Tênis Nike", 500.0, 0.1);
const armario = new Produto("Armário de Cozinha", 350.0);

console.log(sapato.getInformacoes());

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
    if (velocidadeValida) this.velocidadeAtual = novaVelocidade;
    else this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carroNovo = new Carro("Ford", "Ka", 185);
console.log(carroNovo);
// console.log(carroNovo.acelerar(), carroNovo.frear());

class Ferrari extends Carro {
  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari('Ferrari', 'F40', 324)
console.log(f40);


// VISIBLIDADE dos métodos de uma class
  // public = publico, visível por todos
  // protected = protegida, visível pela classe e suas filhas
  // private = privado, só visível apenas para a própria classe