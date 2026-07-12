// Lista 04 — Exercício 09
// Enunciado: mesma ideia do maior, mas trocando quando achar um menor.
// Cuidado: não comece o menor em 0!

(() => {
  const numeros: number[] = [4, 8, 15, 16, 23, 42];

  let menor: number = numeros[0]; // nunca comece em 0, comece com o primeiro item!
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  alert(`O menor número é ${menor}.`);
})();
