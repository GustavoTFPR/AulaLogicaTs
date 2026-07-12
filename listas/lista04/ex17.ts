// Lista 04 — Exercício 17
// Enunciado: percorra a lista de votos e conte quantas vezes o "sim" apareceu.

(() => {
  const votos: string[] = ["sim", "não", "sim", "sim", "não", "sim"];

  let contagemSim: number = 0;
  for (let i = 0; i < votos.length; i++) {
    if (votos[i] === "sim") {
      contagemSim++;
    }
  }

  alert(`O "sim" recebeu ${contagemSim} voto(s) de ${votos.length}.`);
})();
