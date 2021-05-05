let canal: string = "Gaveta";
let inscritos: number = 610234;

// Não podemos usar a variavel nome pois já foi decladara em outro arquivo.
// let nome = 'Pedro'

function soma(a: number, b: string) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(ehManha: boolean): string {
  let saudacao: string;
  if (ehManha) saudacao = "Bom dia!";
  else saudacao = "Vai dormir.";
  return saudacao;
}