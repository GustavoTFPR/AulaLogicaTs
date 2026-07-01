// Lista 02 — Exercício 11
// Enunciado: leia a nota (0–10) e mostre o conceito: A (≥9), B (≥7), C (≥6), D (≥4), F (<4).

// 1. Entrada

(() => {
  const nota: number = Number(prompt("Digite a nota (0 a 10):") ?? "0");

  // 2. Processamento e 3. Saída
  if (nota >= 9) {
    alert("Conceito: A");
  } else if (nota >= 7) {
    alert("Conceito: B");
  } else if (nota >= 6) {
    alert("Conceito: C");
  } else if (nota >= 4) {
    alert("Conceito: D");
  } else {
    alert("Conceito: F");
  }
})();
