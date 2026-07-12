// Lista 04 — Exercício 18
// Enunciado: um Set é uma coleção que não aceita repetidos. Jogue o array num Set e volte pra array com [...].

(() => {
  const numeros: number[] = [1, 2, 2, 3, 4, 4, 4, 5];

  const semDuplicados: number[] = [...new Set(numeros)];

  alert(`Original: [${numeros.join(", ")}]\nSem duplicados: [${semDuplicados.join(", ")}]`);
})();
