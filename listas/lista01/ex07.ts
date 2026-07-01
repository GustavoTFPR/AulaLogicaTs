// Lista 01 — Exercício 07
// Enunciado: leia duas notas e mostre a média entre elas.

// 1. Entrada

(() => {
  const nota1Texto: string = prompt("Digite a primeira nota:") ?? "0";
  const nota2Texto: string = prompt("Digite a segunda nota:") ?? "0";
  const nota1: number = Number(nota1Texto);
  const nota2: number = Number(nota2Texto);

  // 2. Processamento
  const media: number = (nota1 + nota2) / 2;

  // 3. Saída
  alert(`A média entre ${nota1} e ${nota2} é ${media}`);
})();
