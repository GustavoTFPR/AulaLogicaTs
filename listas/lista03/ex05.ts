// Lista 03 — Exercício 05
// Enunciado: Leia N e mostre todos os múltiplos de 5 de 1 até N. Dentro do laço, um if decide.

const n: number = Number(prompt("Digite um número:"));

let resultado: string = "";

for (let i: number = 1; i <= n; i++) {
  if (i % 5 === 0) {
    resultado += i + " ";
  }
}

alert(resultado);
