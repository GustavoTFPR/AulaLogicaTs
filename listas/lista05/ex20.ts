// Lista 05 — Exercício 20
// Enunciado: crie senhaForte(senha): precisa ter 8+ caracteres e pelo menos um número.
// Use uma função auxiliar temNumero.

(() => {
  function temNumero(senha: string): boolean {
    for (const caractere of senha) {
      if (caractere >= "0" && caractere <= "9") {
        return true;
      }
    }
    return false;
  }

  function senhaForte(senha: string): boolean {
    return senha.length >= 8 && temNumero(senha);
  }

  const senha: string = prompt("Digite uma senha:") ?? "";

  if (senhaForte(senha)) {
    alert("Senha forte!");
  } else {
    alert("Senha fraca: precisa de 8+ caracteres e pelo menos um número.");
  }
})();
