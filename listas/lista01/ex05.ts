// Lista 01 — Exercício 05
// Enunciado: receba um valor em reais e converta para dólar (US$ 1 = R$ 4,95).

// 1. Entrada

(() => {
  const reaisTexto: string = prompt("Digite o valor em reais:") ?? "0";
  const reais: number = Number(reaisTexto);

  // 2. Processamento
  const cotacaoDolar: number = 4.95;
  const dolares: number = reais / cotacaoDolar;

  // 3. Saída
  alert(`R$ ${reais} equivalem a US$ ${dolares.toFixed(2)}`);
})();
