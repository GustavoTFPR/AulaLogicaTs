// Lista 04 — Exercício 06
// Enunciado: percorra o array e conte quantos números são pares.

(() => {
  const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let contagem: number = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      contagem++;
    }
  }

  alert(`Existem ${contagem} números pares em [${numeros.join(", ")}].`);
})();
