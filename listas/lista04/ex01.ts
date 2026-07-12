// Lista 04 — Exercício 01
// Enunciado: dado um array de nomes, mostre o primeiro e o último. O último índice é length - 1.

(() => {
  const nomes: string[] = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];

  const primeiro: string = nomes[0];
  const ultimo: string = nomes[nomes.length - 1];

  alert(`Primeiro: ${primeiro}\nÚltimo: ${ultimo}`);
})();
