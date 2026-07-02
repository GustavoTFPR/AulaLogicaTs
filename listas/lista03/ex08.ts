// Lista 03 — Exercício 08
// Enunciado: Pergunte quantos números serão digitados. Depois leia cada um e mostre a soma total.

const quantidade: number = Number(prompt("Quantos números serão digitados?"));

let soma: number = 0;

for (let i: number = 1; i <= quantidade; i++) {
  const numero: number = Number(prompt(`Digite o número ${i}:`));
  soma += numero;
}

alert(`A soma total é ${soma}`);
