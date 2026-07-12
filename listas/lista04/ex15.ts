// Lista 04 — Exercício 15
// Enunciado: ordene do menor pro maior com .sort.
// Pegadinha: sem (a,b)=>a-b, o sort compara como texto e erra!

(() => {
  const numeros: number[] = [23, 4, 42, 8, 16, 15];

  const ordenados: number[] = [...numeros].sort((a, b) => a - b);

  alert(`Original: [${numeros.join(", ")}]\nOrdenado: [${ordenados.join(", ")}]`);
})();
