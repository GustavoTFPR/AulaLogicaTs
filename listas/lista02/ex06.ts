// Lista 02 — Exercício 06
// Enunciado: leia um número e diga se ele é múltiplo de 3.

// 1. Entrada

(() => {
  const numero: number = Number(prompt("Digite um número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (numero % 3 === 0) {
    alert(`${numero} é múltiplo de 3.`);
  } else {
    alert(`${numero} não é múltiplo de 3.`);
  }
})();
