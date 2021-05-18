// Exercício 1 - Classe
class Moto {
  private _velocidade: number = 0

  constructor(public nome: string) {}

  public buzinar(): void {
    console.log('Toooooooooot!')
  }

  public acelerar(delta: number): void {
    this._velocidade = this._velocidade + delta
  }

  public get velocidade() {
    return this._velocidade
  }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {}
  public abstract area(): number
}

class Retangulo extends Objeto2D {
  public area(): number {
    return this.base * this.altura
  }
}

let retangulo: Objeto2D = new Retangulo()
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.area())

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = ''

  public get primeiroNome(): string {
    return this._primeiroNome
  }

  public set primeiroNome(primeiroNome: string) {
    if (primeiroNome.length >= 3) this._primeiroNome = primeiroNome
  }
}

let estagiario = new Estagiario()

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
