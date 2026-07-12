// Lista 04 — Exercício 03
// Enunciado: comece com 2 itens, adicione mais 2 com .push e mostre a lista e o total.

(() => {
  const carrinho: string[] = ["Camiseta", "Tênis"];

  carrinho.push("Boné");
  carrinho.push("Meia");

  alert(`Carrinho: ${carrinho.join(", ")}\nTotal de itens: ${carrinho.length}`);
})();
