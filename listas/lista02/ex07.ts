// Lista 02 — Exercício 07
// Enunciado: a loja dá 10% de desconto em compras acima de R$ 100. Leia o valor e mostre quanto pagar.

// 1. Entrada

(() => {
  const valor: number = Number(prompt("Digite o valor da compra (R$):") ?? "0");

  // 2. Processamento
  let valorAPagar: number = valor;
  if (valor > 100) {
    valorAPagar = valor - valor * 0.1;
  }

  // 3. Saída
  alert(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
})();
