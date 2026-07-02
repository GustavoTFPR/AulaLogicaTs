// Lista 03 — Exercício 03
// Enunciado: Leia um número e mostre a tabuada dele, de 1 a 10 — uma linha por multiplicação.

const numero: number = Number(prompt("Digite um número:"));

let resultado: string = "";

for (let i: number = 1; i <= 10; i++) {
  resultado += `${numero} x ${i} = ${numero * i}\n`;
}

alert(resultado);
