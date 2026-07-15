// Lista 06 — Exercício 03
// Enunciado: crie um componente chamado Titulo que retorna um <h1> com o texto "Turma Front-end".

(() => {
  function Titulo(): JSX.Element {
    return <h1>Turma Front-end</h1>;
  }

  ReactDOM.render(<Titulo />, document.getElementById("root"));
})();
