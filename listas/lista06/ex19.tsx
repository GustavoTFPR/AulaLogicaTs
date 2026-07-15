// Lista 06 — Exercício 19
// Enunciado: deixe um comentário no JSX marcando onde vão os cards, usando {/* … */}.

(() => {
  function Page(): JSX.Element {
    return (
      <div>
        <h1>Turma Front-end</h1>
        {/* Aqui embaixo vão entrar os cards dos alunos */}
      </div>
    );
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
})();
