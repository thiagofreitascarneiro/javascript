// ARROW FUNCTION

let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}


// retorno está implicito 
dobro = a => 2 * a


/////////////////////////////

// MAP

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 8
})

let resultado2 = nums.map((e) => {
    return e * 7

})

console.log(resultado)
console.log(resultado2)


const carrinho = [

    {nome: "Borracha", preco: 3.45,},
    {nome: "Carderno", preco: 13.95},
    {nome: "Kit Lapis", preco: 2.70},
    {nome: "Caneta", preco: 8.00}
]

resultadoCarrinho = carrinho.map((c) => {
    return c.preco * 1.10

})

console.log(resultadoCarrinho)


//FILTER

produtos = [
    {nome: "Borracha", preco: 3.45, fragil: true},
    {nome: "Carderno", preco: 13.95, fragil: false},
    {nome: "Kit Lapis", preco: 2.70, fragil: true},
    {nome: "Caneta", preco: 8.00, fragil: false}
]

resultProduto = produtos.filter((p) => {
    return p.fragil == true 
})

console.log(resultProduto)
