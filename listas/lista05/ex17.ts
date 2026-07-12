// Lista 05 — Exercício 17
// Enunciado: crie inverter(texto) que retorna a palavra de trás pra frente.
// Uma string também tem .length e índice (texto[i])!

(() => {
  function inverter(texto: string): string {
    let invertido: string = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      invertido += texto[i];
    }
    return invertido;
  }

  const palavra: string = prompt("Digite uma palavra:") ?? "";

  const resultado: string = inverter(palavra);
  alert(`"${palavra}" ao contrário é "${resultado}"`);
})();
