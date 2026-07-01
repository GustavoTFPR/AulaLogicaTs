// Lista 01 — Exercício 19
// Enunciado: leia um saque (inteiro) e mostre quantas notas de 100, 50, 20 e 10 entregar,
// usando o menor número de notas possível.

// 1. Entrada

(() => {
  let saque: number = Number(prompt("Digite o valor do saque:") ?? "0");

  // 2. Processamento: vai "gastando" o saque com as notas maiores primeiro.
  const notasDe100: number = Math.floor(saque / 100);
  saque = saque % 100;

  const notasDe50: number = Math.floor(saque / 50);
  saque = saque % 50;

  const notasDe20: number = Math.floor(saque / 20);
  saque = saque % 20;

  const notasDe10: number = Math.floor(saque / 10);
  saque = saque % 10;

  // 3. Saída
  alert(
    `Notas de R$ 100: ${notasDe100}\nNotas de R$ 50: ${notasDe50}\nNotas de R$ 20: ${notasDe20}\nNotas de R$ 10: ${notasDe10}`
  );
})();
