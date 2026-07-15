// Lista 06 — Exercício 13
// Enunciado: retorne nome e curso do aluno sem um <div> em volta — use o fragmento <>…</>.

(() => {
  function DadosAluno(): JSX.Element {
    return (
      <>
        <p>Ana Carolina</p>
        <p>Front-end</p>
      </>
    );
  }

  ReactDOM.render(<DadosAluno />, document.getElementById("root"));
})();
