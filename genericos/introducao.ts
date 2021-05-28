// Os generics substituem o uso de any de forma inteligente
// pois ajudam o compilador a verificar os tipos.

function echo(objeto: any): any {
  return objeto
}

// O tipo generico usa <> para ser criado,
// por convenção usamos o <T>, mas não é obrigatório.
function echoMelhorado<T>(objeto: T): T {
  return objeto
}

console.log(echo('João').length)
console.log(echo(42).length)

console.log(echoMelhorado('João').length)
// console.log(echoMelhorado(42).length) // erro: O tipo number não tem a função length

console.log(echoMelhorado<string>('João').length) // <string> indica que a função será resolvida como tipo string.
