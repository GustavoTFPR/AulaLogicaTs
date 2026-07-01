// Lista 02 — Exercício 16
// Enunciado: é bissexto se for divisível por 4 e não por 100 — ou se for divisível por 400. Leia o ano.

// 1. Entrada

(() => {
  const ano: number = Number(prompt("Digite o ano:") ?? "0");

  // 2. Processamento e 3. Saída
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(`${ano} é bissexto.`);
  } else {
    alert(`${ano} não é bissexto.`);
  }
})();
