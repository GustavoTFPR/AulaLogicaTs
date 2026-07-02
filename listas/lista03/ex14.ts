// Lista 03 — Exercício 14
// Enunciado: Leia quantos números e cada um. No fim, diga quantos foram pares e quantos ímpares. Dois contadores!

const quantidade: number = Number(prompt("Quantos números?"));

let pares: number = 0;
let impares: number = 0;

for (let i: number = 1; i <= quantidade; i++) {
  const numero: number = Number(prompt(`Digite o número ${i}:`));
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

alert(`Pares: ${pares}\nÍmpares: ${impares}`);
