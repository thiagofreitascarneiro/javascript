class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // método de instância
    aumentarVolume() {
       this.volume += 2; 
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('ok. trocarei...')
    }
}

const controle1 = new ControleRemoto
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
//controle1.trocaPilha(); método estático, só consigo acessa-lo pela classe.
ControleRemoto.trocaPilha() // exemplo de acesso metodo estático.
console.log(controle1);
