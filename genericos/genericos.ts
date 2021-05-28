// Array é um tipo genérico que precisa
// de uma expessificação do tipo do conteúdo.

const notas: Array<number> = [8.9, 6.5, 10] // amarrei o tipo como number
notas.push(8.8)
// notas.push('9.6') // erro de tipo.

console.log('notas :>> ', notas)