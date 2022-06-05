// Herança sintax Sugar 
// Camiseta = Cor, Caneca = Material 
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype);

// const camiseta = new Camiseta('Regata', 7.5, 'Preta');
// const produto = new Produto

// camiseta.aumento(10);
// console.log(camiseta);
function Caneca(nome, preco, meterial, estoque) {
    Produto.call(this, nome, preco)
    this.material = meterial;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Corinthians', 13, 'Vidro', 5);


console.log(caneca)