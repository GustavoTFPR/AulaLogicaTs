// Lista 05 — Exercício 01
// Enunciado: crie uma função saudacao(nome) que mostra "Olá, [nome]! Bem-vindo(a)." num alert.
// Depois chame-a com um nome.

(() => {
  function saudacao(nome: string): void {
    alert(`Olá, ${nome}! Bem-vindo(a).`);
  }

  const nomeDigitado: string = prompt("Digite seu nome:") ?? "";
  saudacao(nomeDigitado);
})();
