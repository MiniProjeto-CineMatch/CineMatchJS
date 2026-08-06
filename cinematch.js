
const prompt = require('prompt-sync')({ sigint: true });

// ==============================
// CLASSE PAI
// ==============================

class Conteudo {
constructor(titulo, tipo, generos, duracao, descricao, classificacaoIndicativa) {
this.titulo = titulo;
this.tipo = tipo;
this.generos = generos;
this.duracao = duracao;
this.descricao = descricao;
this.classificacaoIndicativa = classificacaoIndicativa;
}
}

// ==============================
// CLASSE FILME
// ==============================

class Filme extends Conteudo {
constructor(titulo, generos, duracao, descricao, classificacaoIndicativa) {
super(
titulo,
"Filme",
generos,
duracao,
descricao,
classificacaoIndicativa
);
}
}

// ==============================
// CLASSE SÉRIE
// ==============================

class Serie extends Conteudo {
constructor(titulo, generos, duracao, descricao, classificacaoIndicativa, temporadas) {
super(
titulo,
"Série",
generos,
duracao,
descricao,
classificacaoIndicativa
);
this.temporadas = temporadas;
}
}
function pesquisarConteudo() {
    const titulo = prompt("Digite o título do filme ou série: ");
    const encontrado = buscarPorTitulo(catalogo, titulo);
    if (encontrado) {
        console.log("Conteúdo encontrado:");
        console.log(`Título: ${encontrado.titulo}`);
        console.log(`Tipo: ${encontrado.tipo}`);
        console.log(`Gêneros: ${encontrado.generos.join(", ")}`);
        console.log(`Duração: ${encontrado.duracao} minutos`);
        console.log(`Descrição: ${encontrado.descricao}`);
        console.log(`Classificação Indicativa: ${encontrado.classificacaoIndicativa}`);
    } else {
        console.log("Conteúdo não encontrado.");
    }
}

// ==============================
// CATÁLOGO
// ==============================

const filme1 = new Filme(
"Todo Mundo em Pânico",
["Comédia", "Terror"],
110,
"Uma divertida paródia de filmes de terror.",
18
);

const filme2 = new Filme(
"Spider-Man",
["Ação", "Ficção"],
140,
"Peter Parker enfrenta novos desafios.",
12
);

const serie1 = new Serie(
"Breaking Bad",
["Drama"],
50,
"Professor de química vira fabricante de drogas.",
18,
5
);

const catalogo = [filme1, filme2, serie1];


// ==============================
// CLASSE USUÁRIO
// ==============================

class Usuario {
constructor(nome, idade, generosFavoritos) {
this.nome = nome;
this.idade = idade;
this.generosFavoritos = generosFavoritos;
}

}

// ==============================
// LOGIN DO USUÁRIO
// ==============================
function fazerLogin() {
    console.log("========= LOGIN =========");
    const nome = prompt("Digite seu nome: ");
    const idade = Number(prompt("Digite sua idade: "));
    const generosFavoritos = prompt("Digite seus gêneros favoritos (separados por vírgula): ")
        .split(",")
        .map(g => g.trim());

    return new Usuario(nome, idade, generosFavoritos);
}



// ==============================s
// FUNÇAO AQUI
// ==============================
// busca por título (usa find)
function buscarPorTitulo(catalogoConteudos, titulo) {
  return catalogoConteudos.find(
    (c) => c.titulo.toLowerCase() === titulo.toLowerCase()
  );
}



// ==============================
// MENU INTERATIVO
// ==============================

const usuario = fazerLogin();

let resposta;

do {

console.log("\n===== CineMatch JS =====");
console.log("1 - Ver Perfil");
console.log("2 - Ver Catálogo");
console.log("3 - Buscar Conteúdo");
console.log("4 - Compatibilidade");
console.log("5 - Melhor Recomendação");
console.log("6 - Sair");

resposta = prompt("Escolha uma opção: ");

switch (resposta) {

case "1":
    console.log(usuario);
    break;

case "2":
    console.log(catalogo);
    break;

case "3":
    pesquisarConteudo();
    break;

case "4":
    console.log("Compatibilidade em desenvolvimento...");
    break;

case "5":
    console.log("Recomendação em desenvolvimento...");
    break;

case "6":
    console.log("Obrigado por utilizar o CineMatch!");
    break;

default:
    console.log("Opção inválida.");
}

} while (resposta !== "6");
