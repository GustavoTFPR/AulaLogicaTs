// Lista 02 — Exercício 18
// Enunciado: leia 3 lados. Se formam triângulo (cada lado < soma dos outros 2), classifique: equilátero, isósceles ou escaleno.

// 1. Entrada

(() => {
  const ladoA: number = Number(prompt("Digite o 1º lado:") ?? "0");
  const ladoB: number = Number(prompt("Digite o 2º lado:") ?? "0");
  const ladoC: number = Number(prompt("Digite o 3º lado:") ?? "0");

  // 2. Processamento e 3. Saída
  const formaTriangulo: boolean =
    ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

  if (!formaTriangulo) {
    alert("Esses lados não formam um triângulo.");
  } else if (ladoA === ladoB && ladoB === ladoC) {
    alert("Triângulo equilátero.");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    alert("Triângulo isósceles.");
  } else {
    alert("Triângulo escaleno.");
  }
})();
