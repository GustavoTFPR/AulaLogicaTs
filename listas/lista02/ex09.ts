// Lista 02 — Exercício 09
// Enunciado: leia um número e diga se é positivo, negativo ou zero.

// 1. Entrada

(() => {
  const numero: number = Number(prompt("Digite um número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (numero > 0) {
    alert(`${numero} é positivo.`);
  } else if (numero < 0) {
    alert(`${numero} é negativo.`);
  } else {
    alert("O número é zero.");
  }
})();
