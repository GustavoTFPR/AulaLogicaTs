// Lista 05 — Exercício 13
// Enunciado: crie somar(lista) que recebe um array de números e retorna a soma de todos.

(() => {
  function somar(lista: number[]): number {
    let total: number = 0;
    for (const valor of lista) {
      total += valor;
    }
    return total;
  }

  // Array de exemplo (o exercício não pede leitura pelo usuário)
  const numeros: number[] = [4, 8, 15, 16, 23, 42];

  const resultado: number = somar(numeros);
  alert(`A soma de [${numeros.join(", ")}] é ${resultado}.`);
})();
