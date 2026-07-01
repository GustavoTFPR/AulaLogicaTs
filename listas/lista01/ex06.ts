// Lista 01 — Exercício 06
// Enunciado: leia a base e a altura de um retângulo e mostre a área.

// 1. Entrada

(() => {
  const baseTexto: string = prompt("Digite a base do retângulo:") ?? "0";
  const alturaTexto: string = prompt("Digite a altura do retângulo:") ?? "0";
  const base: number = Number(baseTexto);
  const altura: number = Number(alturaTexto);

  // 2. Processamento
  const area: number = base * altura;

  // 3. Saída
  alert(`A área do retângulo é ${area}`);
})();
