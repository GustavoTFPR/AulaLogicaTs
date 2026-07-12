// Lista 04 — Exercício 12
// Enunciado: use .filter pra ficar só com os preços acima de 100.

(() => {
  const precos: number[] = [50, 120, 80, 200, 99, 150];

  const caros: number[] = precos.filter((preco) => preco > 100);

  alert(`Preços originais: [${precos.join(", ")}]\nAcima de 100: [${caros.join(", ")}]`);
})();
