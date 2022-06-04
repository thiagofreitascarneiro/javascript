function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
        if(typeof valor !== 'number') {
            console.log('Deu ruim');
            return;
        }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 10, 3);
// console.log(p1);
p1.estoque = 500;
console.log(p1.estoque);