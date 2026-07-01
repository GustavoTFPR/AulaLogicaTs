// Lista 02 — Exercício 02
// Enunciado: leia a nota (0 a 10) e diga se o aluno foi aprovado (≥ 6) ou reprovado.

// 1. Entrada

(() => {
  const nota: number = Number(prompt("Digite a nota (0 a 10):") ?? "0");

  // 2. Processamento e 3. Saída
  if (nota >= 6) {
    alert("Aluno aprovado.");
  } else {
    alert("Aluno reprovado.");
  }
})();
