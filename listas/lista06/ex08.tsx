// Lista 06 — Exercício 08
// Enunciado: mostre a nota final calculada dentro do JSX usando chaves: {8 + 1}.

(() => {
  function Page(): JSX.Element {
    return <p>Nota final: {8 + 1}</p>;
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
})();
