// Lista 03 — Exercício 19
// Enunciado: Primo só divide por 1 e por ele mesmo. Leia N e liste os primos de 2 até N. Vai precisar de laço dentro de laço.

const n: number = Number(prompt("Digite um número:"));

let resultado: string = "";

for (let numero: number = 2; numero <= n; numero++) {
  let primo: boolean = true;

  for (let divisor: number = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      primo = false;
    }
  }

  if (primo) {
    resultado += numero + " ";
  }
}

alert(resultado);
