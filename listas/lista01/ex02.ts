// Lista 01 — Exercício 02
// Enunciado: pergunte o nome e o sobrenome e mostre uma saudação personalizada.

// 1. Entrada

(() => {
  const nome: string = prompt("Digite seu nome:") ?? "";
  const sobrenome: string = prompt("Digite seu sobrenome:") ?? "";

  // 2. Processamento: aqui é só concatenar, não tem cálculo.
  const nomeCompleto: string = `${nome} ${sobrenome}`;

  // 3. Saída
  alert(`Olá, ${nomeCompleto}! Seja bem-vindo(a).`);
})();
