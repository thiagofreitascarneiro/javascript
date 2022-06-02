function media_ari(){

    let vetor = [1, 2, 3, 4, 5, 6, 7, 7, 22, 55, 70]
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
         soma = vetor[i] + soma

    } 

    return soma/vetor.length
}


console.log(media_ari())


