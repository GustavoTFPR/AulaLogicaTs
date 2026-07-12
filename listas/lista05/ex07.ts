// Lista 05 — Exercício 07
// Enunciado: crie area(base, altura) que retorna base × altura. Leia os dois e mostre.

(() => {
  function area(base: number, altura: number): number {
    return base * altura;
  }

  const baseTexto: string = prompt("Digite a base do retângulo:") ?? "0";
  const alturaTexto: string = prompt("Digite a altura do retângulo:") ?? "0";
  const baseValor: number = Number(baseTexto);
  const alturaValor: number = Number(alturaTexto);

  const resultado: number = area(baseValor, alturaValor);
  alert(`A área do retângulo é ${resultado}.`);
})();
