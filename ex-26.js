
function par(vetor){
    for(let i=1; i <=100; i++){
        if(i % 2 === 0){
            vetor.push(i)

        }
    }
    return vetor
}

valores = []
console.log(par(valores))


