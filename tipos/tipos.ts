// O TS já infere alguns tipos automaticamente.
// string
let nome = "João"; // string

// number
let idade = 17;

// boolean
let souBool = true;

// enums (adicionado pelo typescript)
enum Cor {
  Cinza, // 0
  Verde, // 1
  Azul = 100,
  Laranja, // 101
}
let minhaCor: Cor = Cor.Verde; // 1

// Criando tipos any
let carro: any = "BMW";
let minhaIdade; // any pois nada foi atribuído

// Tuplas, tipos com números e sequência definidos.
let endereco: [string, number] = ["Avenida Principal", 99];

// Array de strings.
let hobbies: Array<string> = ["Cozinha", "Jogar", "Comer", "Dormir"];

// Função com retorno tipado:
function retornaMeuNome(): string {
  return "Sou um texto.";
}

// Tipando entrada e saida de função.
function multiplicar(A: number, B: number): number {
  return A * B;
}

// Função que não retorna:
function digaOi(): void {
  console.log("Oi");
}

// Tipo função: () => number
let calculo: (A: number, B: number) => number;
// calculo só pode funções que cumprem os tipos definidos
calculo = multiplicar;

// Tipo objeto:
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};

// Desafio
/*
    Criar um objeto chamado funcionario com:
        - Array de srings com todos os nomes dos supervisores
        - Função responsável por bater o ponto que recebe a hora (numero) e retorna uma string
            -> Ponto normal. (<= 8)
            -> Fora do horário. (> 8)
*/

// Criando Tipos (Alias) :
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string; // recebe number e retorna string.
};

// Atribuindo o tipo para o objeto e depois criando.
let funcionarios: Funcionario = {
  supervisores: ["Juca", "Mateus", "Ronaldo"],
  baterPonto(hora: number): string {
    if (hora <= 8) return "Ponto Normal.";
    return "Fora do Horário.";
  },
};

let ponto = funcionarios.baterPonto(9);

// Union Types (aceitando mais de um tipo de tipo)
let nota: string | number;
nota = "10";
nota = 10;

// Tipo Never (função sem fim ou que trata um erro)
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: 8,
  validarProduto() {
    if (this.nome.trim().length == 0) falha("O produto precisa de um nome.");
    if (this.preco <= 0) falha("Preço inválido.");
  },
};

produto.validarProduto();

// Tipo nulo deve ser declarado.
let alturaOpcional: null | number;
alturaOpcional = 12;
alturaOpcional = null;

type Contato = {
    nome: string,
    tell: string,
    tell2: string | null
}

const contato1: Contato = {
    nome: 'Roberto',
    tell: '123456789',
    tell2: null,
}

// Caso declare uma variavel com valor nulo:
let podeSerNulo = null // seu tipo será any.

