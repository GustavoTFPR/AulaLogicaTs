// Lista 05 — Exercício 14
// Enunciado: crie contarPares(lista) que recebe um array e retorna quantos números são pares.

(() => {
  function contarPares(lista: number[]): number {
    let contagem: number = 0;
    for (const valor of lista) {
      if (valor % 2 === 0) {
        contagem++;
      }
    }
    return contagem;
  }

  // Array de exemplo (o exercício não pede leitura pelo usuário)
  const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const resultado: number = contarPares(numeros);
  alert(`Existem ${resultado} números pares em [${numeros.join(", ")}].`);
})();
