// Lista 03 — Exercício 17
// Enunciado: Senha certa: 1234. Dê até 3 chances. Na 2ª falha, avise "última tentativa". Bloqueie após 3 erros.

const senhaCorreta: string = "1234";

let tentativas: number = 0;
let acesso: boolean = false;

while (tentativas < 3 && !acesso) {
  const senha: string = prompt("Digite a senha:") ?? "";
  tentativas++;

  if (senha === senhaCorreta) {
    acesso = true;
  } else if (tentativas === 2) {
    alert("Senha errada! Última tentativa.");
  }
}

if (acesso) {
  alert("Acesso liberado!");
} else {
  alert("Bloqueado! Você errou 3 vezes.");
}
