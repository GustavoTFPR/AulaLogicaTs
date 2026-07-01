// Lista 02 — Exercício 12
// Enunciado: menos de 16: não entra. De 16 a 17: só acompanhado. 18+: entra normal. Leia a idade.

// 1. Entrada

(() => {
  const idade: number = Number(prompt("Digite a idade:") ?? "0");

  // 2. Processamento e 3. Saída
  if (idade < 16) {
    alert("Não pode entrar no evento.");
  } else if (idade <= 17) {
    alert("Pode entrar, mas só acompanhado de um responsável.");
  } else {
    alert("Pode entrar normalmente.");
  }
})();
