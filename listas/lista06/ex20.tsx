// Lista 06 — Exercício 20
// Enunciado: junte tudo num Mural estático: um Header, um Contador, vários cards com nomes
// reais diferentes e um Rodape. Repare: repetimos muito código só pra trocar o nome —
// a Aula 12 resolve isso com props.

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

  function Contador(): JSX.Element {
    return (
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
        11 alunos matriculados
      </span>
    );
  }

  // Repare como CardAnaCarolina, CardBrunoSouza e CardCarlaMendes são praticamente
  // idênticos — só o emoji e o nome mudam. Isso é o "código repetido" que o
  // enunciado avisa que a Aula 12 (props) vai resolver.
  function CardAnaCarolina(): JSX.Element {
    return (
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-3xl">👩‍🎓</p>
        <p className="font-bold">Ana Carolina</p>
        <p>Front-end</p>
      </div>
    );
  }

  function CardBrunoSouza(): JSX.Element {
    return (
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-3xl">👨‍🎓</p>
        <p className="font-bold">Bruno Souza</p>
        <p>Front-end</p>
      </div>
    );
  }

  function CardCarlaMendes(): JSX.Element {
    return (
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <p className="text-3xl">👩‍🎓</p>
        <p className="font-bold">Carla Mendes</p>
        <p>Front-end</p>
      </div>
    );
  }

  function Rodape(): JSX.Element {
    return <footer>© 2026 Turma Front-end. Todos os direitos reservados.</footer>;
  }

  function Mural(): JSX.Element {
    return (
      <div className="flex flex-col gap-4">
        <Header />
        <Contador />
        <div className="flex gap-4">
          <CardAnaCarolina />
          <CardBrunoSouza />
          <CardCarlaMendes />
        </div>
        <Rodape />
      </div>
    );
  }

  ReactDOM.render(<Mural />, document.getElementById("root"));
})();
