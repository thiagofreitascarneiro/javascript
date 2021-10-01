function vetores(vetorPilha, vetorAdiciona){

    for(let i = 0; i < vetorAdiciona.length; i++){
        vetorPilha.push(vetorAdiciona[i])
    }
    return vetorPilha
}

let pilha = [1, 2, 3, 4, 5]
let adiciona = [6, 7, 8, 9, 10]

console.log(vetores(pilha, adiciona))