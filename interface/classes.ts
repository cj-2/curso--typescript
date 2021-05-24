import { Humano } from "./Humano"

class Cliente implements Humano {
  public ultimaCompra: Date = new Date()
  constructor(public nome: string) {}

  saudar(sobrenome: string): void {
    console.log('Olá, meu sobrenome é', this.nome, sobrenome)
  }
}

const novoCliente = new Cliente('Joaquim')

console.log('novoCliente :>> ', novoCliente)
novoCliente.saudar('Barbosa')
