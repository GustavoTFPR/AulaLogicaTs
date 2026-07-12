// Lista 05 — Exercício 08
// Enunciado: crie situacao(nota) que retorna "Aprovado" (nota ≥ 6) ou "Reprovado".
// Note: dá pra ter mais de um return.

(() => {
  function situacao(nota: number): string {
    if (nota >= 6) {
      return "Aprovado";
    }
    return "Reprovado";
  }

  const notaTexto: string = prompt("Digite a nota (0 a 10):") ?? "0";
  const nota: number = Number(notaTexto);

  const resultado: string = situacao(nota);
  alert(`Nota ${nota}: ${resultado}`);
})();
