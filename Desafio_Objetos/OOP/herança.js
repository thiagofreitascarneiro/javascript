class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.nome = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
        console.log('ligando...')
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = true;
        
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '12Pro');
console.log(s1);

console.log(s1.ligar())