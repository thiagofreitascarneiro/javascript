export class Empresa {
    public readonly nome: string; // não pode ser alterado
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string, 
        public readonly sobrenome: string,
        ) {}
}


const empresa1 = new Empresa('Udemy', '11.111.222/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Bob');
const colaborador2 = new Colaborador('Sidycley', 'Ruan');
const colaborador3 = new Colaborador('Jack', 'Dwonson');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();

