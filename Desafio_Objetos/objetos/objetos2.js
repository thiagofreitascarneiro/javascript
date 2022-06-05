const produto = { nome: 'Caneca', preco: 18};
const outraCoisa = {...produto};

produto.nome = 'Bob';

console.log(produto);
console.log(outraCoisa)