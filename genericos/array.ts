// Array
function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento))
}

// imprimir([1, 2, 3, 4, 5])
// imprimir<number>([1, 2, 3, 4, 5])
// imprimir<string>(['1', '2', '3', '4', '5'])

imprimir<{ nome: string; idade: number }>([
  { nome: 'Carlos', idade: 23 },
  { nome: 'Anna', idade: 20 },
])

interface Pet {
  nome: string
  idade: number
}

imprimir<Pet>([{ nome: 'Juninho', idade: 1 }])
