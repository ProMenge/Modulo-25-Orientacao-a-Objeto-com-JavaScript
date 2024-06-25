// FORMA LITERAL DE CRIAR OBJETOS

const carroDoJoao = {

    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function () {
        console.log('vruum');
    }
}

const carroDaMaria = {

    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function () {
        console.log('vruum');
    }
}

// -----------------------------------------------------
// FORMA DE CRIAR OBJETOS VIA FUNÇÃO

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {

    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function () {
        console.log('Acelerar');
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("KA", "Ford", 2021, 2020);

// console.log(carroDoJoao2);
// console.log(carroDaMaria2);

// -----------------------------------------------------
// ANALISANDO E DESCOBRINDO INSTACIAS

const nome = "Fred";
const idade = 20;
const eMaiorDeIdade = true;
const conhecimentos = ["html", "CSS", "Javascript", "NodeJS"]

const pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
    conhecimentos: conhecimentos,
}


// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof eMaiorDeIdade);
// console.log(typeof conhecimentos);
// console.log(typeof pessoa);

console.log(carroDaMaria2 instanceof Carro);
console.log(conhecimentos instanceof Array);
console.log(pessoa instanceof Array);