// Lista 04 — Exercício 16
// Enunciado: sem usar .reverse, percorra de trás pra frente e vá dando .push num array novo.

(() => {
  const numeros: number[] = [1, 2, 3, 4, 5];

  const invertido: number[] = [];
  for (let i = numeros.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
  }

  alert(`Original: [${numeros.join(", ")}]\nInvertido: [${invertido.join(", ")}]`);
})();
