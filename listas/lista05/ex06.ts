// Lista 05 — Exercício 06
// Enunciado: crie maior(a, b) que retorna o maior dos dois números.

(() => {
  function maior(a: number, b: number): number {
    if (a > b) {
      return a;
    }
    return b;
  }

  const primeiroTexto: string = prompt("Digite o primeiro número:") ?? "0";
  const segundoTexto: string = prompt("Digite o segundo número:") ?? "0";
  const primeiro: number = Number(primeiroTexto);
  const segundo: number = Number(segundoTexto);

  const resultado: number = maior(primeiro, segundo);
  alert(`O maior número é ${resultado}.`);
})();
