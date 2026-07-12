// Lista 04 — Exercício 05
// Enunciado: use forEach pra montar uma lista com um traço antes de cada nome.

(() => {
  const nomes: string[] = ["Ana", "Bruno", "Carla"];

  let lista: string = "";
  nomes.forEach((nome) => {
    lista += `- ${nome}\n`;
  });

  alert(lista);
})();
