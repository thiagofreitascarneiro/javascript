// Função construtora -> objetos 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = 'Carneiro'


    this.metodo = function() {
        if(this.nome === 'Maria') {
        console.log(this.nome + ': sou um método ' + this.metodo)
         }else{
             console.log(this.nome + ' não é um método.')
        }
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo()
p1.metodo()