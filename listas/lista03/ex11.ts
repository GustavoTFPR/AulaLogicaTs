// Lista 03 — Exercício 11
// Enunciado: Leia A e B e mostre os números pares de A até B. O laço não precisa começar em 1!

const a: number = Number(prompt("Digite o número A:"));
const b: number = Number(prompt("Digite o número B:"));

let resultado: string = "";

for (let i: number = a; i <= b; i++) {
  if (i % 2 === 0) {
    resultado += i + " ";
  }
}

alert(resultado);
