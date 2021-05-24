// Sobescrevendo Object com novos métodos:
interface Object {
  log(): void
}

interface Object {
  teste(): void
}


Object.prototype.log = function (): void {
  console.log(this.toString())
}

Object.prototype.teste = function (): void {
  console.log('Esse é um teste.')
}

const x = 10
const y = 15
const z = 20

x.log()
y.log()
z.log()

x.teste()

