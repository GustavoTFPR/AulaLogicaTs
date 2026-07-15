// Lista 06 — Exercício 11
// Enunciado: estilize um card do aluno só com classes Tailwind no className:
// fundo branco, cantos arredondados, sombra e negrito.

(() => {
  function CardAluno(): JSX.Element {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 font-bold">
        Ana Carolina · Front-end
      </div>
    );
  }

  ReactDOM.render(<CardAluno />, document.getElementById("root"));
})();
