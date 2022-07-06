export abstract class Personagem {
    constructor(
        protected nome: string, 
        protected ataque: number, 
        protected vida: number,
        ) {}
    
    atacar(personagem: Personagem): void {
        console.log(`${this.nome} está atacando...`)
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtaque: number): void {
        console.log(`${this.nome} agora tem ${this.vida} de vida ...`)
        this.vida -= forcaAtaque;
    }

   abstract bordao(): void 
} 

export class Guerreira extends Personagem {
    bordao(): void {
        console.log('Palas Atena atacando.....')
    }
}

export class Monstro extends Personagem {
    bordao(): void {
        console.log('Monstro atacando.....')
    }
}

const guerreira = new Guerreira('Atena', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000)

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);