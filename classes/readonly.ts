// Atributos readyonly so podem podem receber dados uma vez pelo construtor.

class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')

// turboHelice.modelo = 'Outro' // Volta um erro.

console.log('turboHelice :>> ', turboHelice);