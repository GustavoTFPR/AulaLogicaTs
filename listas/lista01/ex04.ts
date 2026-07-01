// Lista 01 — Exercício 04
// Enunciado: leia um número e mostre o dobro, o triplo e a metade dele.

// 1. Entrada

(() => {
  const numeroTexto: string = prompt("Digite um número:") ?? "0";
  const numero: number = Number(numeroTexto);

  // 2. Processamento
  const dobro: number = numero * 2;
  const triplo: number = numero * 3;
  const metade: number = numero / 2;

  // 3. Saída
  alert(`Dobro: ${dobro} | Triplo: ${triplo} | Metade: ${metade}`);
})();
