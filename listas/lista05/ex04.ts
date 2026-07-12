// Lista 05 — Exercício 04
// Enunciado: crie ehPar(n) que retorna true se o número é par e false se não. Use a função num if.

(() => {
  function ehPar(n: number): boolean {
    return n % 2 === 0;
  }

  const numeroTexto: string = prompt("Digite um número:") ?? "0";
  const numero: number = Number(numeroTexto);

  if (ehPar(numero)) {
    alert(`${numero} é par.`);
  } else {
    alert(`${numero} é ímpar.`);
  }
})();
