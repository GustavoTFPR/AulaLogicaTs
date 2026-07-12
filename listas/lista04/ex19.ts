// Lista 04 — Exercício 19
// Enunciado: cada aluno é um objeto { nome, nota }. Use .filter pra pegar os aprovados (nota ≥ 6)
// e .map pros nomes.

(() => {
  interface Aluno {
    nome: string;
    nota: number;
  }

  const alunos: Aluno[] = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carla", nota: 7 },
    { nome: "Diego", nota: 4 },
  ];

  const aprovados: Aluno[] = alunos.filter((aluno) => aluno.nota >= 6);
  const nomesAprovados: string[] = aprovados.map((aluno) => aluno.nome);

  alert(`Alunos aprovados: ${nomesAprovados.join(", ")}`);
})();
