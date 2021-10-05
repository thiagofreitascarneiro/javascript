//Create a function that takes an object and returns the keys and values as separate arrays. 
//Return the keys sorted alphabetically, and their corresponding values in the same order.

const tecnologia = { a: "Apple", b: "Microsoft", c: "Google" }

function keysAndValues(obj) {
    let valores = Object.values(obj)
    let chaves = Object.keys(obj)
    resultado = [valores, chaves]

    return resultado
}

console.log(keysAndValues(tecnologia))
