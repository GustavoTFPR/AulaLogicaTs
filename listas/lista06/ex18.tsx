// Lista 06 — Exercício 18
// Enunciado: monte uma Pagina que junta Header + CardAluno + Rodape numa coluna.

(() => {
  function Header(): JSX.Element {
    return (
      <header>
        <h1>Turma Front-end</h1>
      </header>
    );
  }

  function CardAluno(): JSX.Element {
    return (
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-3xl">👩‍🎓</p>
        <p className="font-bold">Ana Carolina</p>
        <p>Front-end</p>
      </div>
    );
  }

  function Rodape(): JSX.Element {
    return <footer>© 2026 Turma Front-end.</footer>;
  }

  function Pagina(): JSX.Element {
    return (
      <div className="flex flex-col gap-4">
        <Header />
        <CardAluno />
        <Rodape />
      </div>
    );
  }

  ReactDOM.render(<Pagina />, document.getElementById("root"));
})();
