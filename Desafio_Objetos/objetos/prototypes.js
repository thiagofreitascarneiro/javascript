// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// }


// const objB = {
//     chaveA: 'B'
//     // __proto__: Object.prototype
// }

// Object.setPrototypeOf(objB, objA)
// console.log(objB.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco 
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - ( this.preco * (percentual/ 100 ))
}

const p1 = new Produto('camiseta', 50)
p1.desconto(100)

console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15
};
// estou pegando o prototype de Produto
Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(10);

console.log(p1);
console.log(p2);