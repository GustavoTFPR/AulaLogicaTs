// Lista 01 — Exercício 08
// Enunciado: leia dois números e mostre soma, subtração, multiplicação, divisão e resto.

// 1. Entrada

(() => {
  const primeiroTexto: string = prompt("Digite o primeiro número:") ?? "0";
  const segundoTexto: string = prompt("Digite o segundo número:") ?? "0";
  const primeiro: number = Number(primeiroTexto);
  const segundo: number = Number(segundoTexto);

  // 2. Processamento
  const soma: number = primeiro + segundo;
  const subtracao: number = primeiro - segundo;
  const multiplicacao: number = primeiro * segundo;
  const divisao: number = primeiro / segundo;
  const resto: number = primeiro % segundo;

  // 3. Saída
  alert(
    `Soma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao.toFixed(2)}\nResto: ${resto}`
  );
})();
