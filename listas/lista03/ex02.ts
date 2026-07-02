// Lista 03 — Exercício 02
// Enunciado: Leia N e conte de N até 1 (de trás pra frente). No fim, solte um 

const n: number = Number(prompt("Digite um número:"));
let resultado: string = "";

for (let i: number = n; i >= 1; i--) {
  resultado += i + " ";
}

alert(resultado + "Fim da contagem!");