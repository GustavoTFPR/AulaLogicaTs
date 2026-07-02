// Lista 03 — Exercício 10
// Enunciado: Leia quantos números e depois cada um. No fim, diga qual foi o maior.

const quantidade: number = Number(prompt("Quantos números?"));

let maior: number = Number(prompt("Digite o número 1:"));

for (let i: number = 2; i <= quantidade; i++) {
  const numero: number = Number(prompt(`Digite o número ${i}:`));
  if (numero > maior) {
    maior = numero;
  }
}

alert(`O maior número foi ${maior}`);
