// Lista 01 — Exercício 18
// Enunciado: leia um total de segundos e mostre em horas, minutos e segundos.

// 1. Entrada

(() => {
  const totalSegundosTexto: string = prompt("Digite o total de segundos:") ?? "0";
  const totalSegundos: number = Number(totalSegundosTexto);

  // 2. Processamento
  const horas: number = Math.floor(totalSegundos / 3600);
  const minutos: number = Math.floor((totalSegundos % 3600) / 60);
  const segundos: number = totalSegundos % 60;

  // 3. Saída
  alert(`${totalSegundos} segundos equivalem a ${horas}h ${minutos}min ${segundos}s`);
})();
