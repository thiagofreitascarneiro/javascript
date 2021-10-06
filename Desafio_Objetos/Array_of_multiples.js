//Create a function that takes two numbers as arguments (num, length) and returns an array 
//of multiples of num until the array length reaches length.


function arrayOfMultiples(a, b){
    let vetor = []
    let result = 0 
    for(let i = 0; i < b; i++){
        result = a + result
        vetor.push(result)
    }
        return vetor
}

console.log(arrayOfMultiples(7, 5))