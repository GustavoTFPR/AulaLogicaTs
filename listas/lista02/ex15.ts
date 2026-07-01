// Lista 02 — Exercício 15
// Enunciado: vai pra fila preferencial quem tem mais de 65, ou é deficiente, ou é gestante. Faça as 3 perguntas.

// 1. Entrada

(() => {
  const idade: number = Number(prompt("Digite a idade:") ?? "0");
  const deficienteTexto: string = (prompt("É deficiente? (S/N)") ?? "N").toUpperCase();
  const gestanteTexto: string = (prompt("É gestante? (S/N)") ?? "N").toUpperCase();

  // 2. Processamento
  const temPreferencia: boolean = idade > 65 || deficienteTexto === "S" || gestanteTexto === "S";

  // 3. Saída
  if (temPreferencia) {
    alert("Vá para a fila preferencial.");
  } else {
    alert("Vá para a fila normal.");
  }
})();
