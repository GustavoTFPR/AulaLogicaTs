// Lista 02 — Exercício 08
// Enunciado: leia um número e diga se é par, ímpar ou zero. (Use else if.)

// 1. Entrada

(() => {
  const numero: number = Number(prompt("Digite um número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (numero === 0) {
    alert("O número é zero.");
  } else if (numero % 2 === 0) {
    alert(`${numero} é par.`);
  } else {
    alert(`${numero} é ímpar.`);
  }
})();
