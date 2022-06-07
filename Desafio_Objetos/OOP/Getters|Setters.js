const _velocidade = Symbol() // Gerar Id aleatório

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
       if(typeof valor !== 'number') return;
       if(valor >= 100 || valor <= 0) return;
       this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if(this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
console.log(c1.velocidade);

c1.velocidade = 55;
console.log(c1.velocidade);

// for( let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

//c1.velocidade = 2000 // Como eu atribui um retorno usando get, não será possivel alterar a velocidade.

