// Lista 01 — Exercício 10
// Enunciado: leia a distância (km) e os litros gastos, e mostre o consumo médio (km/l) com 1 casa.

// 1. Entrada

(() => {
  const distanciaTexto: string = prompt("Digite a distância percorrida (km):") ?? "0";
  const litrosTexto: string = prompt("Digite os litros de combustível gastos:") ?? "0";
  const distancia: number = Number(distanciaTexto);
  const litros: number = Number(litrosTexto);

  // 2. Processamento
  const consumo: number = distancia / litros;

  // 3. Saída
  alert(`O consumo médio é ${consumo.toFixed(1)} km/l`);
})();
