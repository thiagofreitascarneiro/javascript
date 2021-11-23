//ARROW FUNCTION

const soma = (a , b) => a + b;

console.log(soma)

// Arrow function (this)

const lexico1 = () => console.log(this === exports)

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))


//ESB - Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))


