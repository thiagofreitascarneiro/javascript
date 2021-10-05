//Write a function that converts an object into an array, 
//where each element represents a key-value pair in the form of an array.

const cabecalho = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

function toArray(obj) {
	return Object.entries(obj);
}

console.log(toArray(cabecalho))

