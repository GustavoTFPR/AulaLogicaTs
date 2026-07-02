// Lista 03 — Exercício 16
// Enunciado: O número secreto é 7. Peça palpites (while) até acertar, contando as tentativas.

const secreto: number = 7;

let palpite: number = Number(prompt("Adivinhe o número secreto:"));
let tentativas: number = 1;

while (palpite !== secreto) {
  palpite = Number(prompt("Errou! Tente de novo:"));
  tentativas++;
}

alert(`Você acertou em ${tentativas} tentativa(s)!`);
