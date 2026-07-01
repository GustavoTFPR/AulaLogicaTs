// Lista 01 — Exercício 20
// Enunciado: leia o salário bruto. Desconte INSS 11%, IR 7,5% e VT 6%, e mostre cada desconto e o líquido.

// 1. Entrada

(() => {
  const salarioTexto: string = prompt("Digite o salário bruto (R$):") ?? "0";
  const salarioBruto: number = Number(salarioTexto);

  // 2. Processamento
  const inss: number = salarioBruto * 0.11;
  const ir: number = salarioBruto * 0.075;
  const vt: number = salarioBruto * 0.06;
  const salarioLiquido: number = salarioBruto - inss - ir - vt;

  // 3. Saída
  alert(
    `INSS (11%): R$ ${inss.toFixed(2)}\nIR (7,5%): R$ ${ir.toFixed(2)}\nVT (6%): R$ ${vt.toFixed(2)}\nSalário líquido: R$ ${salarioLiquido.toFixed(2)}`
  );
})();
