export class Carro {
    private readonly motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }

    parar(): void {
        this.motor.parar();
    }

    desligar(): void {
        this.motor.desligar();;
    }
}
export class Motor {
    ligar(): void {
        console.log('motor está ligado...');
    }

    acelerar(): void {
        console.log('Motor está acelerando...');
    }

    parar(): void {
        console.log('Motor está parado...');
    }

    desligar(): void {
        console.log('Motor está desligando...');
    }
}

const carro = new Carro();

carro.ligar();
carro.desligar();
