// Lista 06 — Exercício 15
// Enunciado: crie um Header com o título da turma e uma <nav> com dois links: Início e Turma.

(() => {
  function Header(): JSX.Element {
    return (
      <header>
        <h1>Turma Front-end</h1>
        <nav className="flex gap-4">
          <a href="/">Início</a>
          <a href="/turma">Turma</a>
        </nav>
      </header>
    );
  }

  ReactDOM.render(<Header />, document.getElementById("root"));
})();
