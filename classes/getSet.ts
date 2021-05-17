class Pessoa {
  private _idade: number = 0

  public get idade(): number {
    return this._idade
  }

  public set idade(idade: number) {
    if (idade >= 0 && idade <= 120) this._idade = idade
  }
}

const pessoa = new Pessoa()
pessoa.idade = 15
pessoa.idade = -3 // dado inválido. 


console.log('pessoa :>> ', pessoa)
