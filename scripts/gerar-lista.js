// scripts/gerar-lista.js
// Gera a estrutura de uma nova lista de exercícios (pasta listas/listaNN)
// com os arquivos .ts e .html de cada exercício já criados (em branco,
// prontos pra você preencher).
//
// Uso:
//   node scripts/gerar-lista.js <numero> "<titulo>" <quantidade>
//   Comando para criar as listas: node scripts/gerar-lista.js 04 "Funções" 20
//
// Exemplo (cria a Lista 04 — Funções, com 20 exercícios):
//   node scripts/gerar-lista.js 04 "Funções" 20

const fs = require("fs");
const path = require("path");

// ---------- 1. Ler os argumentos da linha de comando ----------

const [, , numeroArg, tituloArg, quantidadeArg] = process.argv;

if (!numeroArg || !tituloArg || !quantidadeArg) {
  console.error("Uso: node scripts/gerar-lista.js <numero> \"<titulo>\" <quantidade>");
  console.error('Exemplo: node scripts/gerar-lista.js 04 "Funções" 20');
  process.exit(1);
}

const numero = numeroArg.padStart(2, "0"); // "4" -> "04"
const titulo = tituloArg;
const quantidade = Number(quantidadeArg);

if (!Number.isInteger(quantidade) || quantidade < 1) {
  console.error("A quantidade de exercícios precisa ser um número inteiro maior que zero.");
  process.exit(1);
}

// ---------- 2. Preparar caminhos ----------

const raizDoProjeto = path.join(__dirname, "..");
const pastaDaLista = path.join(raizDoProjeto, "listas", `lista${numero}`);

if (fs.existsSync(pastaDaLista)) {
  console.error(`A pasta "listas/lista${numero}" já existe. Escolha outro número ou apague a pasta antes.`);
  process.exit(1);
}

fs.mkdirSync(pastaDaLista, { recursive: true });

// ---------- 3. Templates ----------

function templateTs(numeroExercicio) {
  return `// Lista ${numero} — Exercício ${numeroExercicio}
// Enunciado:

`;
}

function templateExercicioHtml(numeroExercicio) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lista ${numero} — Exercício ${numeroExercicio}</title>
  <link rel="stylesheet" href="../../styles.css" />
</head>
<body>
  <main class="container">
    <h1>Lista ${numero} — Exercício ${numeroExercicio}</h1>
    <p class="subtitulo"></p>
    <p>As caixas de diálogo aparecem automaticamente. Recarregue a página (F5) para rodar de novo.</p>
    <a class="voltar" href="index.html">← Voltar à lista</a>
  </main>

  <!-- Carrega o JavaScript gerado a partir de ex${numeroExercicio}.ts (mesma pasta) -->
  <script src="ex${numeroExercicio}.js"></script>
</body>
</html>
`;
}

function templateIndiceDaLista() {
  const botoes = Array.from({ length: quantidade }, (_, indice) => {
    const numeroExercicio = String(indice + 1).padStart(2, "0");
    return `      <a class="botao" href="ex${numeroExercicio}.html">Exercício ${numeroExercicio}</a>`;
  }).join("\n");

  return `<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lista ${numero} — ${titulo}</title>
  <link rel="stylesheet" href="../../styles.css" />
</head>

<body>
  <main class="container">
    <h1>Lista ${numero}</h1>
    <p class="subtitulo">${titulo}</p>

    <p>Clique no exercício para executá-lo:</p>

    <nav class="botoes">
${botoes}
    </nav>

    <a class="voltar" href="../../index.html">← Voltar ao menu</a>
  </main>
</body>

</html>
`;
}

// ---------- 4. Criar os arquivos de cada exercício ----------

for (let indice = 0; indice < quantidade; indice++) {
  const numeroExercicio = String(indice + 1).padStart(2, "0");

  fs.writeFileSync(path.join(pastaDaLista, `ex${numeroExercicio}.ts`), templateTs(numeroExercicio));
  fs.writeFileSync(path.join(pastaDaLista, `ex${numeroExercicio}.html`), templateExercicioHtml(numeroExercicio));
}

// ---------- 5. Criar o index.html da lista ----------

fs.writeFileSync(path.join(pastaDaLista, "index.html"), templateIndiceDaLista());

// ---------- 6. Registrar a nova lista no index.html da raiz ----------

const indiceRaizPath = path.join(raizDoProjeto, "index.html");
const indiceRaiz = fs.readFileSync(indiceRaizPath, "utf-8");

const novoBotao = `      <a class="botao" href="listas/lista${numero}/index.html">Lista ${numero} — ${titulo}</a>\n    </nav>`;

if (indiceRaiz.includes(`listas/lista${numero}/index.html`)) {
  console.log("Aviso: o index.html da raiz já tinha um link para essa lista, não mexi nele.");
} else {
  const indiceRaizAtualizado = indiceRaiz.replace("    </nav>", novoBotao);
  fs.writeFileSync(indiceRaizPath, indiceRaizAtualizado);
}

// ---------- 7. Resumo ----------

console.log(`Lista ${numero} — ${titulo} criada com sucesso!`);
console.log(`Pasta: listas/lista${numero}`);
console.log(`Exercícios criados: ${quantidade} (ex01.ts/.html até ex${String(quantidade).padStart(2, "0")}.ts/.html)`);
console.log("Agora é só preencher o enunciado e o código de cada ex*.ts e rodar 'npm run build'.");


