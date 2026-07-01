// Lista 02 — Exercício 20
// Enunciado: leia peso e altura, calcule o IMC (peso ÷ altura²) e classifique: abaixo (<18.5), normal (<25), sobrepeso (<30), obesidade (≥30).

// 1. Entrada

(() => {
  const peso: number = Number(prompt("Digite o peso (kg):") ?? "0");
  const altura: number = Number(prompt("Digite a altura (m):") ?? "0");

  // 2. Processamento
  const imc: number = peso / (altura * altura);

  // 3. Saída
  if (imc < 18.5) {
    alert(`IMC: ${imc.toFixed(2)} — Abaixo do peso.`);
  } else if (imc < 25) {
    alert(`IMC: ${imc.toFixed(2)} — Peso normal.`);
  } else if (imc < 30) {
    alert(`IMC: ${imc.toFixed(2)} — Sobrepeso.`);
  } else {
    alert(`IMC: ${imc.toFixed(2)} — Obesidade.`);
  }
})();
