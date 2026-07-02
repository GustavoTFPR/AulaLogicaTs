// Lista 03 — Exercício 18
// Enunciado: Cada termo é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8… Leia N e mostre os N primeiros termos.

const n: number = Number(prompt("Quantos termos mostrar?"));

let anterior: number = 0;
let atual: number = 1;
let resultado: string = "";

for (let i: number = 1; i <= n; i++) {
  resultado += anterior + " ";
  const proximo: number = anterior + atual;
  anterior = atual;
  atual = proximo;
}

alert(resultado);
