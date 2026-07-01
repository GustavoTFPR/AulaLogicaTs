// Lista 02 — Exercício 13
// Enunciado: leia três números e diga qual é o maior.

// 1. Entrada

(() => {
  const numero1: number = Number(prompt("Digite o primeiro número:") ?? "0");
  const numero2: number = Number(prompt("Digite o segundo número:") ?? "0");
  const numero3: number = Number(prompt("Digite o terceiro número:") ?? "0");

  // 2. Processamento
  let maior: number = numero1;
  if (numero2 > maior) {
    maior = numero2;
  }
  if (numero3 > maior) {
    maior = numero3;
  }

  // 3. Saída
  alert(`O maior valor é ${maior}.`);
})();
