// Lista 01 — Exercício 09
// Enunciado: leia a área de um terreno e o valor do m², e mostre o preço total.

// 1. Entrada

(() => {
  const areaTexto: string = prompt("Digite a área do terreno (m²):") ?? "0";
  const valorM2Texto: string = prompt("Digite o valor do m² (R$):") ?? "0";
  const area: number = Number(areaTexto);
  const valorM2: number = Number(valorM2Texto);

  // 2. Processamento
  const precoTotal: number = area * valorM2;

  // 3. Saída
  alert(`O preço total do terreno é R$ ${precoTotal.toFixed(2)}`);
})();
