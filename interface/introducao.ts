import { Humano } from "./Humano"

function saudarComOla(pessoa: Humano): void {
  console.log(`Olá ${pessoa.nome}!`)
}

let pessoaComum: Humano = {
  nome: 'Marcio',
  idade: 15,
  saudar(sobrenome: string) {
    console.log('Olá, meu sobrenome é', this.nome, sobrenome)
  },
}

saudarComOla(pessoaComum)
pessoaComum.saudar('Carvalho')