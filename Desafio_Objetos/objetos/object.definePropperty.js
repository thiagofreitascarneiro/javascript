function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, //valor
        writable: false, // pode alterar
        configurable: true // configurável
    });
}

const p1 = new Produto('Camisa', 10, 3);
p1.estoque = 500000;
console.log(p1)