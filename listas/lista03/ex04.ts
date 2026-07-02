// Lista 03 — Exercício 04
// Enunciado: Leia N e some todos os números de 1 até N. Use um acumulador.

const n: number = Number(prompt("Digite um número:"));

let soma: number = 0;

for (let i: number = 1; i <= n; i++) {
  soma += i;
}

alert(`A soma de 1 até ${n} é ${soma}`);
