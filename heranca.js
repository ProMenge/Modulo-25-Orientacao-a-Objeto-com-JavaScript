function pessoa(nome) {
    this.nome = nome;
    this.dizOi = function () {
        console.log(this.nome + " diz olá");
    }
}

function funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario

    //getters e setters

    this.setSalario = function (valor) {

        if (typeof valor === 'number') {

            _salario = valor;
        }
    }
    this.getSalario = function () {
        return _salario;
    }

    this.dizCargo = function () {
        consolelog(this.cargo);
    }

    this.aumento = function () {

        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    pessoa.call(this, nome);
}

function Estagiario(nome) {

    funcionario.call(this, nome, "Estagiário", 2000);

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.07
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    funcionario.call(this, nome, "Gerente", 10000);
    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new funcionario("Maria", "Dev Front-End", 8000);
const funcionario2 = new Estagiario("Pedro")
const funcionario3 = new Gerente("Hasbula")

// funcionario1.dizOi();
// pessoa1.dizOi();

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());