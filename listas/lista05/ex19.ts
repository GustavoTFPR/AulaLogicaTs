// Lista 05 — Exercício 19
// Enunciado: crie calcular(a, b, op) que retorna o resultado conforme a operação (+ - * /).

(() => {
  function calcular(a: number, b: number, op: string): number | string {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    } else if (op === "/") {
      if (b === 0) {
        return "Erro: divisão por zero";
      }
      return a / b;
    }
    return "Operação inválida";
  }

  const primeiroTexto: string = prompt("Digite o primeiro número:") ?? "0";
  const segundoTexto: string = prompt("Digite o segundo número:") ?? "0";
  const operacao: string = prompt("Digite a operação (+, -, *, /):") ?? "+";

  const primeiro: number = Number(primeiroTexto);
  const segundo: number = Number(segundoTexto);

  const resultado: number | string = calcular(primeiro, segundo, operacao);
  alert(`Resultado: ${resultado}`);
})();
