// Lista 03 — Exercício 15
// Enunciado: Só aceite segundos de 1 a 59. Se digitarem fora, peça de novo (while) até valer. Depois conte.

let segundos: number = Number(prompt("Digite os segundos (1 a 59):"));

while (segundos < 1 || segundos > 59) {
  segundos = Number(prompt("Valor inválido! Digite os segundos (1 a 59):"));
}

let resultado: string = "";

for (let i: number = 1; i <= segundos; i++) {
  resultado += i + " ";
}

alert(resultado);
