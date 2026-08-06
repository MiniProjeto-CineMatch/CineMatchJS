
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
const nome = prompt("Digite seu nome: ")
const idade = Number(prompt("Digite sua idade: "));

console.log("\nEscolha seu generos favoritos: ");

console.log("1 - Açao");
console.log("2 - Drama");
console.log("3 - Comedia");
console.log("4 - Terror");
console.log("5 - Ficçao");

const generosFavoritos = [];

let escolhaGenero;

do { escolhaGenero = prompt("Escolha um genero (0 para finalizar):");
switch (escolhaGenero) {

case "1":
generosFavoritos.push("Ação");
break;

case "2":
generosFavoritos.push("Drama");
break;

case "3":
generosFavoritos.push("Comedia");
break;

case "4":
generosFavoritos.push("Terror");
break;

case "5":
generosFavoritos.push("Ficçao");
break;

case "0":
break;

default:
console.log("Opçao invalida.");

}
} while (escolhaGenero !== "0");

const usuario = new Usuario(
nome,
idade,
generosFavoritos

);
return usuario;
}

const usuario = fazerLogin();



// ==============================
// FUNÇAO AQUI
// ==============================
// ==============================
// FUNÇÃO DE BUSCA (find)
// ==============================

function buscarConteudo() {
    console.log("\n===== BUSCAR CONTEÚDO =====");

    const titulo = prompt("Digite o título do filme ou série: ");

    const conteudoEncontrado = catalogo.find(
        conteudo => conteudo.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (conteudoEncontrado) {
        console.log("\n===== CONTEÚDO ENCONTRADO =====");
        console.log(`Título: ${conteudoEncontrado.titulo}`);
        console.log(`Tipo: ${conteudoEncontrado.tipo}`);
        console.log(`Gêneros: ${conteudoEncontrado.generos.join(", ")}`);
        console.log(`Duração: ${conteudoEncontrado.duracao} minutos`);
        console.log(`Descrição: ${conteudoEncontrado.descricao}`);
        console.log(`Classificação: ${conteudoEncontrado.classificacaoIndicativa} anos`);

        if (conteudoEncontrado instanceof Serie) {
            console.log(`Temporadas: ${conteudoEncontrado.temporadas}`);
        }
    } else {
        console.log("\nConteúdo não encontrado no catálogo.");
    }
}


// ==============================
// MENU INTERATIVO
// ==============================
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
    buscarConteudo();
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
