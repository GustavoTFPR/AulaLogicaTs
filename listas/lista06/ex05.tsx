// Lista 06 — Exercício 05
// Enunciado: defina Titulo e Rodape e monte uma Page que usa os dois dentro de um <div>.

(() => {
  function Titulo(): JSX.Element {
    return <h1>Turma Front-end</h1>;
  }

  function Rodape(): JSX.Element {
    return <footer>© 2026 Turma Front-end. Todos os direitos reservados.</footer>;
  }

  function Page(): JSX.Element {
    return (
      <div>
        <Titulo />
        <Rodape />
      </div>
    );
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
})();
