// Lista 03 — Exercício 07
// Enunciado: Leia N e mostre só os números pares de 1 até N.

const n: number = Number(prompt("Digite um número:"));

let resultado: string = "";

for (let i: number = 1; i <= n; i++) {
  if (i % 2 === 0) {
    resultado += i + " ";
  }
}

alert(resultado);
