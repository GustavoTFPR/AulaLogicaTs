// Lista 06 — Exercício 16
// Enunciado: crie um Contador que mostra "11 alunos matriculados" num selo.
// O número é fixo (sem estado ainda).

(() => {
  function Contador(): JSX.Element {
    return (
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
        11 alunos matriculados
      </span>
    );
  }

  ReactDOM.render(<Contador />, document.getElementById("root"));
})();
