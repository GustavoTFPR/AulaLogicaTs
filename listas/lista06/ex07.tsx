// Lista 06 — Exercício 07
// Enunciado: coloque três <CardAluno/> lado a lado. Repare: saem 3 cards iguais ("Ana Carolina") —
// na próxima aula, props deixam cada um diferente.

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

  function Page(): JSX.Element {
    return (
      <div className="flex gap-4">
        <CardAluno />
        <CardAluno />
        <CardAluno />
      </div>
    );
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
  // Repare: os 3 cards saem idênticos ("Ana Carolina" nos três) porque CardAluno
  // ainda não recebe nenhuma informação de fora. Na próxima aula, usamos props
  // pra fazer cada CardAluno mostrar um aluno diferente.
})();
