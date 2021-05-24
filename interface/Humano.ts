export interface Humano {
  nome: string
  idade?: number // "?" faz com que o parâmentro seja opcional.
  [prop: string]: any // será recebido uma propriedade dinâmica, do tipo any.
  saudar(sobrenome: string): void
}