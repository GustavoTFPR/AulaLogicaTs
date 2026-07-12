// Lista 05 — Exercício 10
// Enunciado: crie fatorial(n) que calcula n! com um for dentro e retorna o total. A função esconde o laço!

(() => {
  function fatorial(n: number): number {
    let resultado: number = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  const numeroTexto: string = prompt("Digite um número:") ?? "0";
  const numero: number = Number(numeroTexto);

  const resultado: number = fatorial(numero);
  alert(`${numero}! = ${resultado}`);
})();
