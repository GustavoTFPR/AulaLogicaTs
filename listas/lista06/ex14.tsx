// Lista 06 — Exercício 14
// Enunciado: crie a pasta app/turma/ com um page.tsx. A URL /turma passa a existir sozinha
// (roteamento por pastas do Next.js — App Router).
//
// Isso só funciona de verdade dentro de um projeto Next.js rodando com "next dev".
// Aqui não existe um servidor Next.js, então esta página apenas SIMULA o resultado:
// o conteúdo que apareceria ao acessar http://localhost:3000/turma.
//
// A referência de como fica no projeto Next.js real está no arquivo
// ex14-referencia-nextjs/app/turma/page.tsx (nesta mesma pasta).

(() => {
  function TurmaPage(): JSX.Element {
    return (
      <div>
        <h1>Turma Front-end</h1>
        <p>Você está na rota /turma.</p>
      </div>
    );
  }

  ReactDOM.render(<TurmaPage />, document.getElementById("root"));
})();
