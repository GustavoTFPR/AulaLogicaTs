// Lista 05 — Exercício 18
// Enunciado: uma função pode chamar a si mesma! Faça o fatorial sem for: n! = n × (n−1)!.
// Precisa de um caso base pra parar.

(() => {
  function fatorial(n: number): number {
    if (n <= 1) {
      return 1; // caso base
    }
    return n * fatorial(n - 1);
  }

  const numeroTexto: string = prompt("Digite um número:") ?? "0";
  const numero: number = Number(numeroTexto);

  const resultado: number = fatorial(numero);
  alert(`${numero}! = ${resultado}`);
})();
