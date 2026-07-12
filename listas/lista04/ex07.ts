// Lista 04 — Exercício 07
// Enunciado: some tudo e divida pelo .length. Mostre com 1 casa decimal.

(() => {
  const notas: number[] = [7, 8.5, 6, 9, 5.5];

  let soma: number = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  const media: number = soma / notas.length;

  alert(`A média das notas é ${media.toFixed(1)}.`);
})();
