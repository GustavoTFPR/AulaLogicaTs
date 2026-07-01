// Lista 02 — Exercício 14
// Enunciado: leia a idade e classifique: criança (0–11), adolescente (12–17), adulto (18–59), idoso (60+).

// 1. Entrada

(() => {
  const idade: number = Number(prompt("Digite a idade:") ?? "0");

  // 2. Processamento e 3. Saída
  if (idade <= 11) {
    alert("Criança.");
  } else if (idade <= 17) {
    alert("Adolescente.");
  } else if (idade <= 59) {
    alert("Adulto.");
  } else {
    alert("Idoso.");
  }
})();
