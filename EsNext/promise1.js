
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

p.then(function(valor) {
    console.log(valor)
})

let nome = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Bob'])
})

function primeiroElemento(array) {
    return[0]
}

nome 
    .then()
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowercase())
    .then(letraMinuscula => console.log(letraMinuscula))
