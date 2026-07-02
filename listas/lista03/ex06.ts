// Lista 03 — Exercício 06
// Enunciado: Leia um nome e quantas vezes repetir. Escreva o nome esse tanto de vezes.

const nome: string = prompt("Digite um nome:") ?? "";
const vezes: number = Number(prompt("Quantas vezes repetir?"));

let resultado: string = "";

for (let i: number = 1; i <= vezes; i++) {
  resultado += nome + " ";
}

alert(resultado);
