// Lista 01 — Exercício 16
// Enunciado: leia o peso (kg) e a altura (m) e calcule o IMC = peso ÷ altura², com 2 casas.

// 1. Entrada

(() => {
  const pesoTexto: string = prompt("Digite seu peso (kg):") ?? "0";
  const alturaTexto: string = prompt("Digite sua altura (m):") ?? "0";
  const peso: number = Number(pesoTexto);
  const altura: number = Number(alturaTexto);

  // 2. Processamento
  const imc: number = peso / (altura * altura);

  // 3. Saída
  alert(`Seu IMC é ${imc.toFixed(2)}`);
})();
