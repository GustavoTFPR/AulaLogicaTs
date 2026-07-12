// Lista 04 — Exercício 14
// Enunciado: use .indexOf pra achar a posição de um nome na fila. Ele devolve -1 se não achar!

(() => {
  const fila: string[] = ["Ana", "Bruno", "Carla", "Diego"];

  const nome: string = prompt("Digite um nome para buscar na fila:") ?? "";
  const posicao: number = fila.indexOf(nome);

  if (posicao === -1) {
    alert(`${nome} não está na fila.`);
  } else {
    alert(`${nome} está na posição ${posicao} da fila.`);
  }
})();
