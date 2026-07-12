// Lista 05 — Exercício 03
// Enunciado: crie uma função soma(a, b) com dois parâmetros que retorna a soma. Leia 2 números e mostre o resultado.

(() => {
  function soma(a: number, b: number): number {
    return a + b;
  }

  const primeiroTexto: string = prompt("Digite o primeiro número:") ?? "0";
  const segundoTexto: string = prompt("Digite o segundo número:") ?? "0";
  const primeiro: number = Number(primeiroTexto);
  const segundo: number = Number(segundoTexto);

  const resultado: number = soma(primeiro, segundo);
  alert(`${primeiro} + ${segundo} = ${resultado}`);
})();
