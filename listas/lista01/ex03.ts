// Lista 01 — Exercício 03
// Enunciado: leia um número inteiro e mostre o antecessor e o sucessor dele.

// 1. Entrada

(() => {
  const numeroTexto: string = prompt("Digite um número inteiro:") ?? "0";
  const numero: number = Number(numeroTexto);

  // 2. Processamento
  const antecessor: number = numero - 1;
  const sucessor: number = numero + 1;

  // 3. Saída
  alert(`Antecessor: ${antecessor} | Número: ${numero} | Sucessor: ${sucessor}`);
})();
