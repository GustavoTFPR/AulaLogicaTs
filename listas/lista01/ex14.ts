// Lista 01 — Exercício 14
// Enunciado: leia um total de segundos e mostre quantos minutos e segundos são (divisão inteira e resto).

// 1. Entrada

(() => {
  const totalSegundosTexto: string = prompt("Digite o total de segundos:") ?? "0";
  const totalSegundos: number = Number(totalSegundosTexto);

  // 2. Processamento
  const minutos: number = Math.floor(totalSegundos / 60);
  const segundosRestantes: number = totalSegundos % 60;

  // 3. Saída
  alert(`${totalSegundos} segundos equivalem a ${minutos} minuto(s) e ${segundosRestantes} segundo(s)`);
})();
