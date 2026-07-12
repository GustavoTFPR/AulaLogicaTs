// Lista 04 — Exercício 20
// Enunciado: na mesma lista de objetos, descubra quem tem a maior nota — guardando o objeto inteiro,
// não só o número.

(() => {
  interface Aluno {
    nome: string;
    nota: number;
  }

  const alunos: Aluno[] = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carla", nota: 9.5 },
    { nome: "Diego", nota: 7 },
  ];

  let melhorAluno: Aluno = alunos[0];
  for (let i = 1; i < alunos.length; i++) {
    if (alunos[i].nota > melhorAluno.nota) {
      melhorAluno = alunos[i];
    }
  }

  alert(`O melhor aluno é ${melhorAluno.nome}, com nota ${melhorAluno.nota}.`);
})();
