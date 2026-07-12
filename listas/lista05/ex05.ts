// Lista 05 — Exercício 05
// Enunciado: crie media(a, b) que retorna a média das duas notas. Mostre com 1 casa decimal.

(() => {
  function media(a: number, b: number): number {
    return (a + b) / 2;
  }

  const nota1Texto: string = prompt("Digite a primeira nota:") ?? "0";
  const nota2Texto: string = prompt("Digite a segunda nota:") ?? "0";
  const nota1: number = Number(nota1Texto);
  const nota2: number = Number(nota2Texto);

  const resultado: number = media(nota1, nota2);
  alert(`A média é ${resultado.toFixed(1)}`);
})();
