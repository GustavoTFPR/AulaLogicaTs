// Lista 02 — Exercício 10
// Enunciado: leia dois números e diga se o 1º é maior, menor ou se são iguais.

// 1. Entrada

(() => {
  const numero1: number = Number(prompt("Digite o primeiro número:") ?? "0");
  const numero2: number = Number(prompt("Digite o segundo número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (numero1 > numero2) {
    alert("O 1º número é maior.");
  } else if (numero1 < numero2) {
    alert("O 1º número é menor.");
  } else {
    alert("Os números são iguais.");
  }
})();
