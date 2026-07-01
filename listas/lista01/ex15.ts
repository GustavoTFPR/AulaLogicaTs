// Lista 01 — Exercício 15
// Enunciado: leia o total da conta e o nº de pessoas. Some 10% de gorjeta e mostre quanto cada um paga.

// 1. Entrada

(() => {
  const contaTexto: string = prompt("Digite o valor total da conta (R$):") ?? "0";
  const pessoasTexto: string = prompt("Digite o número de pessoas:") ?? "1";
  const conta: number = Number(contaTexto);
  const pessoas: number = Number(pessoasTexto);

  // 2. Processamento
  const contaComGorjeta: number = conta + conta * 0.1;
  const valorPorPessoa: number = contaComGorjeta / pessoas;

  // 3. Saída
  alert(`Cada pessoa paga R$ ${valorPorPessoa.toFixed(2)} (com 10% de gorjeta incluída)`);
})();
