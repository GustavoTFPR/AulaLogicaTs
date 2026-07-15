// Lista 06 — Exercício 09
// Enunciado: crie uma variável nome com "Daniel Guimarães" e mostre-a no JSX usando {nome}.

(() => {
  function Page(): JSX.Element {
    const nome: string = "Daniel Guimarães";
    return <p>Aluno: {nome}</p>;
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
})();
