// Factory Function ( Função Fabrica)


function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        // Getter 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter 
        set nomeCompleto(valor) {
            console.log(valor)
        },
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
         }
    };
    
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('BOb', 'Juh', 1.6, 42)

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);

console.log(p1.fala('falando sobre JS'));


p1.nomeCompleto = 'Thiago Freitas Carneiro'
console.log(p1.nomeCompleto);
