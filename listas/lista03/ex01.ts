// Lista 03 — Exercício 01
// Enunciado: Leia um número N e escreva todos os números de 1 até N, um do lado do outro.

const n: number = Number(prompt("Digite um número:"));
let resultado: string = "";

for (let i: number = 1; i <= n; i++) {
    resultado += i + " ";
}

alert(resultado);