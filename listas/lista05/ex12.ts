// Lista 05 — Exercício 12
// Enunciado: crie ehPrimo(n) que retorna true/false. Dica: assim que achar um divisor, já pode
// dar return false (sai da função!).

(() => {
  function ehPrimo(n: number): boolean {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  const numeroTexto: string = prompt("Digite um número:") ?? "0";
  const numero: number = Number(numeroTexto);

  if (ehPrimo(numero)) {
    alert(`${numero} é primo.`);
  } else {
    alert(`${numero} não é primo.`);
  }
})();
