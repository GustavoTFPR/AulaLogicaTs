// Lista 05 — Exercício 02
// Enunciado: crie uma função dobro(n) que retorna o dobro do número (não use alert dentro dela!).
// Depois mostre o valor devolvido.

(() => {
  function dobro(n: number): number {
    return n * 2;
  }

  const numeroTexto: string = prompt("Digite um número:") ?? "0";
  const numero: number = Number(numeroTexto);

  const resultado: number = dobro(numero);
  alert(`O dobro de ${numero} é ${resultado}.`);
})();
