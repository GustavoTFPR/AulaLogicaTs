// Lista 06 — Exercício 06
// Enunciado: crie um CardAluno com foto (emoji), nome e curso chumbados: Ana Carolina · Front-end.

(() => {
  function CardAluno(): JSX.Element {
    return (
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-3xl">👩‍🎓</p>
        <p className="font-bold">Ana Carolina</p>
        <p>Front-end</p>
      </div>
    );
  }

  ReactDOM.render(<CardAluno />, document.getElementById("root"));
})();
