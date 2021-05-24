// Criando interfaces que atendem funções.
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo = function (a: number, b: number): number {
  return Math.pow(a, b)
}

