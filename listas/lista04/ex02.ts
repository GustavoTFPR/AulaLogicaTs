// Lista 04 — Exercício 02
// Enunciado: mostre quantos itens tem o array e o item do meio (use Math.floor pra achar o índice central).

(() => {
  const nomes: string[] = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];

  const tamanho: number = nomes.length;
  const indiceMeio: number = Math.floor(tamanho / 2);
  const itemDoMeio: string = nomes[indiceMeio];

  alert(`Tamanho: ${tamanho}\nItem do meio: ${itemDoMeio}`);
})();
