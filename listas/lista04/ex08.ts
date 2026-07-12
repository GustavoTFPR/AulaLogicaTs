// Lista 04 — Exercício 08
// Enunciado: comece supondo que o maior é o primeiro item. Percorra e troque sempre que achar um maior.

(() => {
  const numeros: number[] = [4, 8, 15, 16, 23, 42];

  let maior: number = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  alert(`O maior número é ${maior}.`);
})();
