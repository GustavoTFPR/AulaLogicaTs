// Lista 03 — Exercício 20
// Enunciado: Um caixa: 1 deposita, 2 vê saldo, 3 sai. Repita o menu (while) até escolher Sair.

let saldo: number = 0;
let opcao: number = 0;

while (opcao !== 3) {
  opcao = Number(prompt("1 - Depositar\n2 - Ver saldo\n3 - Sair\nEscolha uma opção:"));

  if (opcao === 1) {
    const valor: number = Number(prompt("Digite o valor do depósito:"));
    saldo += valor;
    alert(`Depósito realizado! Saldo atual: ${saldo}`);
  } else if (opcao === 2) {
    alert(`Saldo atual: ${saldo}`);
  } else if (opcao === 3) {
    alert("Saindo... Até logo!");
  } else {
    alert("Opção inválida!");
  }
}
