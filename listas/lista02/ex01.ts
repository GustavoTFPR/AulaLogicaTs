// Lista 02 — Exercício 01
// Enunciado: leia a idade e diga se a pessoa é maior ou menor de idade.

// 1. Entrada

(() => {
  const idade: number = Number(prompt("Digite a idade:") ?? "0");

  // 2. Processamento e 3. Saída
  if (idade >= 18) {
    alert("Maior de idade.");
  } else {
    alert("Menor de idade.");
  }
})();
