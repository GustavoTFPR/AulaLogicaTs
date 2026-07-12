// Lista 05 — Exercício 11
// Enunciado: crie saudacaoHorario(hora) que retorna "Bom dia" (< 12), "Boa tarde" (< 18) ou "Boa noite".

(() => {
  function saudacaoHorario(hora: number): string {
    if (hora < 12) {
      return "Bom dia";
    } else if (hora < 18) {
      return "Boa tarde";
    }
    return "Boa noite";
  }

  const horaTexto: string = prompt("Digite a hora atual (0 a 23):") ?? "0";
  const hora: number = Number(horaTexto);

  const resultado: string = saudacaoHorario(hora);
  alert(`${resultado}!`);
})();
