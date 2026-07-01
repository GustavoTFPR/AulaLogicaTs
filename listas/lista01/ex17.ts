// Lista 01 — Exercício 17
// Enunciado: leia o preço e o valor pago. Mostre o troco, quantas notas de R$ 10 cabem nele e quanto sobra.

// 1. Entrada

(() => {
  const precoTexto: string = prompt("Digite o preço do produto (R$):") ?? "0";
  const pagoTexto: string = prompt("Digite o valor pago (R$):") ?? "0";
  const preco: number = Number(precoTexto);
  const pago: number = Number(pagoTexto);

  // 2. Processamento
  const troco: number = pago - preco;
  const notasDeDez: number = Math.floor(troco / 10);
  const restoTroco: number = troco % 10;

  // 3. Saída
  alert(
    `Troco: R$ ${troco.toFixed(2)}\nNotas de R$ 10: ${notasDeDez}\nSobra: R$ ${restoTroco.toFixed(2)}`
  );
})();
