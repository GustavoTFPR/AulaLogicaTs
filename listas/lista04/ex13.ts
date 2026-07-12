// Lista 04 — Exercício 13
// Enunciado: pergunte um nome e use .includes pra dizer se ele está entre os convidados.

(() => {
  const convidados: string[] = ["Ana", "Bruno", "Carla", "Diego"];

  const nome: string = prompt("Digite um nome para verificar:") ?? "";
  const estaNaLista: boolean = convidados.includes(nome);

  if (estaNaLista) {
    alert(`${nome} está na lista de convidados.`);
  } else {
    alert(`${nome} não está na lista de convidados.`);
  }
})();
