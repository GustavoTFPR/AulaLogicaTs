// Lista 06 — Exercício 10
// Enunciado: junte nome e curso numa mesma linha usando template string (crases) dentro das chaves.

(() => {
  function Page(): JSX.Element {
    const nome: string = "Daniel Guimarães";
    const curso: string = "Front-end";
    return <p>{`${nome} · ${curso}`}</p>;
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
})();
