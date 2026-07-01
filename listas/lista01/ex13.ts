// Lista 01 — Exercício 13
// Enunciado: leia o salário e a porcentagem de aumento, e mostre o novo salário.

// 1. Entrada

(() => {
  const salarioTexto: string = prompt("Digite o salário atual (R$):") ?? "0";
  const percentualTexto: string = prompt("Digite a porcentagem de aumento (%):") ?? "0";
  const salario: number = Number(salarioTexto);
  const percentual: number = Number(percentualTexto);

  // 2. Processamento
  const novoSalario: number = salario + salario * (percentual / 100);

  // 3. Saída
  alert(`O novo salário é R$ ${novoSalario.toFixed(2)}`);
})();
