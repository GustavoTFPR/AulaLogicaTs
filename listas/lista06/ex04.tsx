// Lista 06 — Exercício 04
// Enunciado: crie um componente Rodape que retorna um <footer> com o copyright da turma.

(() => {
  function Rodape(): JSX.Element {
    return <footer>© 2026 Turma Front-end. Todos os direitos reservados.</footer>;
  }

  ReactDOM.render(<Rodape />, document.getElementById("root"));
})();
