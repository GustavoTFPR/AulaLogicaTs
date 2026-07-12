// Lista 04 — Exercício 11
// Enunciado: use .map com .toUpperCase() pra deixar todos os nomes em maiúsculas.

(() => {
  const nomes: string[] = ["ana", "bruno", "carla"];

  const nomesMaiusculos: string[] = nomes.map((nome) => nome.toUpperCase());

  alert(`Original: [${nomes.join(", ")}]\nMaiúsculo: [${nomesMaiusculos.join(", ")}]`);
})();
