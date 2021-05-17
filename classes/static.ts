/*
  Atributos e Métodos Estáticos:
    Podem ser invocados sem instanciar a classe.
*/

class Matematica {
  static PI: number = 3.1416
  public static areaDoCirculo(raio: number): number {
    return this.PI * raio * raio
  }
}

// const m1 = new Matematica
// let areaCiruclo = m1.areaDoCirculo(15)
// console.log('areaCiruclo :>> ', areaCiruclo) // 706.86

console.log(Matematica.areaDoCirculo(15)) // 706.86