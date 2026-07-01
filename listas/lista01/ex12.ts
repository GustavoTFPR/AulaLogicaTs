// Lista 01 — Exercício 12
// Enunciado: leia uma temperatura em Celsius e converta para Fahrenheit: F = C × 9 / 5 + 32.

// 1. Entrada

(() => {
  const celsiusTexto: string = prompt("Digite a temperatura em Celsius:") ?? "0";
  const celsius: number = Number(celsiusTexto);

  // 2. Processamento
  const fahrenheit: number = (celsius * 9) / 5 + 32;

  // 3. Saída
  alert(`${celsius}°C equivalem a ${fahrenheit}°F`);
})();
