// Lista 03 — Exercício 13
// Enunciado: Leia N e conte de 1 até N com reticências. No fim, escreva "Fim!".

const n: number = Number(prompt("Digite um número:"));

let resultado: string = "";

for (let i: number = 1; i <= n; i++) {
  resultado += i + "... ";
}

resultado += "Fim!";

alert(resultado);
