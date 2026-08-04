const prompt = require('prompt-sync')({sigint: true});


const usuario = [{
    nome: "Anderson",
    idade: 16,
    email: "sctec@gmail.com"   
},{
    nome: "Stefani",
    idade: 19,
    email: "sctec2@gmail.com"   
},{
    nome: "Adriano",
    idade: 22,
    email: "sctec3@gmail.com"   
}
]

console.log(usuario);





// Classes RF 09, RF10, RF 11.
/*class Conteudo {
    constructor(id, titulo, tipo, genero, duracaoMinutos) {
        this.id = id;
        this.titulo = titulo;
        this.tipo = tipo;
        this.genero = genero;
        this.duracaoMinutos = duracaoMinutos;
    }
     //uso do "this" para acessar as propriedades do objeto atual
    exibirResumo() {
        return `${this.titulo} (${this.tipo}) - ${this.genero}, ${this.duracaoMinutos} minutos`;
    }

}

// herança: Filme e Serie herdam de Conteudo
class Serie extends Conteudo {
    constructor(id, titulo, genero, duracaoMinutos, temporadas) {
        super(id, titulo, 'Série', genero, duracaoMinutos);
        this.temporadas = temporadas;
    }
    exibirTemporadas() {
        return `${this.titulo} - ${this.temporadas} temporadas`;
    }
}*/

