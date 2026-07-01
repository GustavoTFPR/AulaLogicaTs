// Lista 02 — Exercício 19
// Enunciado: leia 2 números e a operação (+ - * /). Faça a conta — e bloqueie a divisão por zero.

// 1. Entrada

(() => {
  const numero1: number = Number(prompt("Digite o primeiro número:") ?? "0");
  const operacao: string = prompt("Digite a operação (+, -, *, /):") ?? "+";
  const numero2: number = Number(prompt("Digite o segundo número:") ?? "0");

  // 2. Processamento e 3. Saída
  if (operacao === "+") {
    alert(`Resultado: ${numero1 + numero2}`);
  } else if (operacao === "-") {
    alert(`Resultado: ${numero1 - numero2}`);
  } else if (operacao === "*") {
    alert(`Resultado: ${numero1 * numero2}`);
  } else if (operacao === "/") {
    if (numero2 === 0) {
      alert("Erro: divisão por zero não é permitida.");
    } else {
      alert(`Resultado: ${numero1 / numero2}`);
    }
  } else {
    alert("Operação inválida.");
  }
})();
