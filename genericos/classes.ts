// o R é o retorno
export abstract class OperacaoBinaria<T, R> {
  constructor(public operador1: T, public operador2: T) {}

  abstract executar(): R
}

// class SomaBinaria extends OperacaoBinaria<number, number> {
//   executar(): number {
//     return this.operador1 + this.operador2
//   }
// }

// console.log(new SomaBinaria(1, 2).executar())
