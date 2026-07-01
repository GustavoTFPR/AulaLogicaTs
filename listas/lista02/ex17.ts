// Lista 02 — Exercício 17
// Enunciado: login certo: admin, senha: 1234. Se algo estiver errado, diga qual (login ou senha).

// 1. Entrada

(() => {
  const login: string = prompt("Digite o login:") ?? "";
  const senha: string = prompt("Digite a senha:") ?? "";

  // 2. Processamento e 3. Saída
  if (login === "admin" && senha === "1234") {
    alert("Login realizado com sucesso!");
  } else if (login !== "admin") {
    alert("Login incorreto.");
  } else {
    alert("Senha incorreta.");
  }
})();
