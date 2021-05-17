/*
  VISIBLIDADE dos métodos de uma Classe
    public = publico, visível por todos
    protected = protegida, visível pela classe e suas filhas
    private = privado, visível apenas para a própria classe
*/

// EXEMPLO 01

class Data {
  dia: number // publico por padrão
  public mes: number // epecificando
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(27, 3, 1998)

aniversario.dia = 28
aniversario.mes = 4
aniversario.ano = 1999

console.log(aniversario)

const casamento = new Data() // É possível omitir o "()".
console.log(casamento)

// EXEMPLO 2

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}
