// Lista 02 — Exercício 05
// Enunciado: leia dois números e diga qual é o maior.

// 1. Entrada

(() => {
  const numero1: number = Number(prompt("Digite o primeiro número:") ?? "0");
  const numero2: number = Number(prompt("Digite o segundo número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (numero1 > numero2) {
    alert(`O maior é ${numero1}.`);
  } else {
    alert(`O maior é ${numero2}.`);
  }
})();
