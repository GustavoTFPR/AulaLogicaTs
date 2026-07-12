// Lista 04 — Exercício 10
// Enunciado: use .map pra criar uma nova lista com cada número dobrado.

(() => {
  const numeros: number[] = [1, 2, 3, 4, 5];

  const dobrados: number[] = numeros.map((numero) => numero * 2);

  alert(`Original: [${numeros.join(", ")}]\nDobrado: [${dobrados.join(", ")}]`);
})();
