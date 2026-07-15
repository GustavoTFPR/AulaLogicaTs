// Lista 06 — Exercício 02
// Enunciado: troque o título por um subtítulo da turma e salve. Veja o Fast Refresh atualizar
// a tela sozinho, sem recarregar.
//
// Observação: "Fast Refresh" é um recurso do servidor de desenvolvimento do Next.js
// (rodando com "next dev"). Ele não existe nesta demonstração estática em HTML — aqui
// só conseguimos mostrar o resultado final, depois da troca.

(() => {
  function Page(): JSX.Element {
    return <h2>Turma Front-end 2026 — Módulo React 🎓</h2>;
  }

  ReactDOM.render(<Page />, document.getElementById("root"));
})();
