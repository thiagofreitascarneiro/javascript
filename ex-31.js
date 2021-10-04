function negativo(vetor) {
    let contador = 0 
    vetor.forEach(nota => {
        if (nota < 0){
            contador += 1
        }   
    }
    )
    return contador
}

let notas = [ 1, 3, 6, 7, 8, 9, 33, -1, -55]
console.log(negativo(notas))