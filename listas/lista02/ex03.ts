// Lista 02 — Exercício 03
// Enunciado: leia um número e diga se ele é par ou ímpar.

// 1. Entrada

(() => {
  const numero: number = Number(prompt("Digite um número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (numero % 2 === 0) {
    alert(`${numero} é par.`);
  } else {
    alert(`${numero} é ímpar.`);
  }
})();
