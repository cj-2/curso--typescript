// Definindo escopos com o namespace.
namespace Geometria {
  export namespace Area {
    const PI = 3.14

    export function Circunferencias(raio: number): number {
      return PI * Math.pow(raio, 2)
    }

    export function Retangulo(base: number, altura: number): number {
      return base * altura
    }
  }
}

console.log(Geometria.Area.Circunferencias(8))
console.log(Geometria.Area.Retangulo(8, 10))
