// Lista 03 — Exercício 12
// Enunciado: O fatorial de N (N!) é 1 × 2 × 3 × … × N. Leia N e calcule. Acumulador de multiplicação começa em 1!

const n: number = Number(prompt("Digite um número:"));

let fatorial: number = 1;

for (let i: number = 1; i <= n; i++) {
  fatorial *= i;
}

alert(`${n}! = ${fatorial}`);
