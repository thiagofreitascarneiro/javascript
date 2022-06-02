function procura(){

    let vetor = [11, 12, 3, 4, 35, 6, 17, 888, 9, 120]
    let maior
    let menor

    for (let i = 0; i< vetor.length; i++){
        if (i === 0){
             maior = vetor[i]
             menor = vetor[i]
        }else if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
    

    }
    return `"o maior valor é ${maior} e o menor é ${menor}"`
}


console.log(procura())



