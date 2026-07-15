// Lista 06 — Exercício 17
// Enunciado: crie uma SecaoTurma com um <section> contendo um heading e um parágrafo sobre a turma.

(() => {
  function SecaoTurma(): JSX.Element {
    return (
      <section>
        <h2>Sobre a turma</h2>
        <p>
          Uma turma dedicada a aprender front-end do zero, com foco em HTML, CSS,
          TypeScript e React.
        </p>
      </section>
    );
  }

  ReactDOM.render(<SecaoTurma />, document.getElementById("root"));
})();
