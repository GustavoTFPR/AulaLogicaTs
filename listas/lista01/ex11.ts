// Lista 01 — Exercício 11
// Enunciado: leia as 4 notas de um aluno e mostre a média final.

// 1. Entrada

(() => {
  const nota1Texto: string = prompt("Digite a primeira nota:") ?? "0";
  const nota2Texto: string = prompt("Digite a segunda nota:") ?? "0";
  const nota3Texto: string = prompt("Digite a terceira nota:") ?? "0";
  const nota4Texto: string = prompt("Digite a quarta nota:") ?? "0";

  const nota1: number = Number(nota1Texto);
  const nota2: number = Number(nota2Texto);
  const nota3: number = Number(nota3Texto);
  const nota4: number = Number(nota4Texto);

  // 2. Processamento
  const media: number = (nota1 + nota2 + nota3 + nota4) / 4;

  // 3. Saída
  alert(`A média final do aluno é ${media.toFixed(2)}`);
})();
