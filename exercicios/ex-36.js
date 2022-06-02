function valor1(num1, num2){
    let vetor = []
    for(let i = 0; i < num1.length ; i++){
        resultado = num1[i] * num2
        vetor.push(resultado)

    }
        return vetor
}

function valor2(num1, num2) {
    let vetor = []
    for(let i = 0; i < num1.length ; i++){
        if (num1[i] > 5){
            resultado = num1[i] * num2
            vetor.push(resultado)
            }else{
                vetor.push(num1[i])
            }
    }
        return vetor
}


let pam1 = [1, 2, 3.4, 7]
let pam2 = 5

console.log(valor1(pam1, pam2))
console.log(valor2(pam1, pam2))

