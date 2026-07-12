// Lista 05 — Exercício 16
// Enunciado: reaproveite o ehPrimo do ex. 12 dentro de primosAte(max), que retorna a lista de primos até max.

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

  function primosAte(max: number): number[] {
    const primos: number[] = [];
    for (let numero = 2; numero <= max; numero++) {
      if (ehPrimo(numero)) {
        primos.push(numero);
      }
    }
    return primos;
  }

  const maxTexto: string = prompt("Digite até qual número buscar primos:") ?? "0";
  const max: number = Number(maxTexto);

  const resultado: number[] = primosAte(max);
  alert(`Primos até ${max}: [${resultado.join(", ")}]`);
})();
