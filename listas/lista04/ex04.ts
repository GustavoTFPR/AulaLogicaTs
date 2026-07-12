// Lista 04 — Exercício 04
// Enunciado: percorra o array com for e some todos os números num acumulador.

(() => {
  const numeros: number[] = [4, 8, 15, 16, 23, 42];

  let soma: number = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  alert(`A soma de [${numeros.join(", ")}] é ${soma}.`);
})();
