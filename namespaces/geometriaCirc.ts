// Definindo escopos com o namespace.
namespace Geometria2 {
  export namespace Area {
    const PI = 3.14
    export function Circunferencias(raio: number): number {
      return PI * Math.pow(raio, 2)
    }
  }
}
