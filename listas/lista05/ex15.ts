// Lista 05 — Exercício 15
// Enunciado: crie soPares(lista) que retorna um novo array só com os pares.
// Uma função pode devolver uma coleção!

(() => {
  function soPares(lista: number[]): number[] {
    const pares: number[] = [];
    for (const valor of lista) {
      if (valor % 2 === 0) {
        pares.push(valor);
      }
    }
    return pares;
  }

  // Array de exemplo (o exercício não pede leitura pelo usuário)
  const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const resultado: number[] = soPares(numeros);
  alert(`Números pares de [${numeros.join(", ")}]: [${resultado.join(", ")}]`);
})();
