export class Pessoa {
    constructor(
        public nome: string, 
        public sobrenome: string, 
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}
export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return 'isso vem do aluno' + this.nome + ' ' + this.sobrenome;
    }

}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'vem do cliente ' + this.nome + ' ' + this.sobrenome;
    }
}

const aluno = new Pessoa('Bob', 'Juniors', 30, '000.000.000.00');
const pessoa = new Aluno('Luiz', 'Miranda', 20, '000.000.000.00');
const cliente = new Cliente('Jo', 'Bill', 23, '000.000.000-00');

console.log(aluno);
console.log(pessoa.getNomeCompleto());
console.log(cliente.getNomeCompleto());