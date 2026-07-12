// Lista 05 — Exercício 09
// Enunciado: crie celsiusParaF(c) que converte usando F = C × 9 / 5 + 32 e retorna o valor.

(() => {
  function celsiusParaF(c: number): number {
    return (c * 9) / 5 + 32;
  }

  const celsiusTexto: string = prompt("Digite a temperatura em Celsius:") ?? "0";
  const celsius: number = Number(celsiusTexto);

  const fahrenheit: number = celsiusParaF(celsius);
  alert(`${celsius}°C equivalem a ${fahrenheit}°F`);
})();
