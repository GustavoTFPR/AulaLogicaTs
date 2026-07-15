// Lista 06 — Exercício 12
// Enunciado: mostre o avatar do aluno com uma <img/> auto-fechada, com src e alt.

(() => {
  function Avatar(): JSX.Element {
    return (
      <img
        src="https://i.pravatar.cc/150?img=5"
        alt="Foto de perfil de Ana Carolina"
        className="rounded-full"
      />
    );
  }

  ReactDOM.render(<Avatar />, document.getElementById("root"));
})();
