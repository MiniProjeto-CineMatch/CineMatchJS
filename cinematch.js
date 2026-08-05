const prompt = require('prompt-sync')({sigint: true});

// ==============================
// CLASSE PAI
// ==============================

class Conteudo {
    constructor(titulo, tipo, generos, duracao, descricao, classificacaoIndicativa) 
    {
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
    constructor(titulo, generos, duracao, descricao, classificacaoIndicativa) 
    {
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




// ==============================
// FUNÇAO AQUI
// ==============================




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
// TESTES
// ==============================

// console.log("===== USUÁRIOS =====");
// console.log(listaUsuarios);

// console.log("");

// console.log("===== CATÁLOGO =====");
// console.log(catalogo);

// console.log("");

// console.log("===== TESTE HERANÇA =====");
// console.log(filme1);
// console.log(serie1);


// ==============================
// MENU INTERATIVO
// ==============================
let resposta;

do {

    console.log("\n===== CineMatch JS =====");
    console.log("1 - Ver Perfil");
    console.log("2 - Ver Catálogo");
    console.log("3 - Compatibilidade");
    console.log("4 - Melhor Recomendação");
    console.log("5 - Sair");

    resposta = prompt("Escolha uma opção: ");

    switch (resposta) {
        case "1":
            console.log(usuario);
            break;
        case "2":
            console.log(catalogo);
            break;
        case "3":
            console.log("Compatibilidade em desenvolvimento...");
            break;
        case "4":
            console.log("Recomendação em desenvolvimento...");
            break;
        case "5":
            console.log("Obrigado por utilizar o CineMatch!");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (resposta !== "5");