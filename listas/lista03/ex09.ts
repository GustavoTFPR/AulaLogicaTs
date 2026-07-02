// Lista 03 — Exercício 09
// Enunciado: Leia quantas notas, depois cada nota, e mostre a média com 1 casa decimal.

const quantidade: number = Number(prompt("Quantas notas?"));

let soma: number = 0;

for (let i: number = 1; i <= quantidade; i++) {
  const nota: number = Number(prompt(`Digite a nota ${i}:`));
  soma += nota;
}

const media: number = soma / quantidade;

alert(`A média é ${media.toFixed(1)}`);
