/* 
  Classes abstratas não podem ser istânciadas, apenas heradas.
    - Podem conter "classes inacabadas".

*/

// Exemplo 1
abstract class Televisao {
  abstract ligar(modelo: string): void
}

{
  // Exemplo 2

  abstract class Calculo {
    private _resultado: number = 0

    abstract executar(...numeros: number[]): void

    public get resultado(): number {
      return this._resultado
    }

    public set resultado(resultado: number) {
      this._resultado = resultado
    }
  }

  class Soma extends Calculo {
    public executar(...numeros: number[]): void {
      this.resultado = numeros.reduce((acumulado, valor) => acumulado + valor)
    }
  }

  class Multiplicacao extends Calculo {
    public executar(...numeros: number[]): void {
      this.resultado = numeros.reduce((acumulado, valor) => acumulado * valor)
    }
  }

  let somar: Calculo = new Soma()
  somar.executar(1, 2, 3, 4, 5)

  console.log('somar.resultado :>> ', somar.resultado)

  let multiplicar: Calculo = new Multiplicacao()
  multiplicar.executar(1, 2, 3, 4, 5)

  console.log('multiplicar.resultado :>> ', multiplicar.resultado)
}
