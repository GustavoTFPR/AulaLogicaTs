// Lista 06 — Exercício 01
// Enunciado: no page.tsx, faça o componente da página retornar um <h1> anunciando a turma:
// "Turma Front-end 2026 🎓".
//
// Aviso: a partir desta lista trabalhamos com React. Como ainda não montamos um projeto
// Next.js de verdade, cada exercício aqui simula uma "page.tsx": um componente que é
// renderizado direto no navegador (React e ReactDOM são carregados via CDN no .html).

(() => {
  function Page(): JSX.Element {
    return <h1>Turma Front-end 2026 🎓</h1>;
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
})();
