// Lista 02 — Exercício 04
// Enunciado: leia um número e diga se é positivo (≥ 0) ou negativo.

// 1. Entrada

(() => {
  const numero: number = Number(prompt("Digite um número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (numero >= 0) {
    alert(`${numero} é positivo.`);
  } else {
    alert(`${numero} é negativo.`);
  }
})();
