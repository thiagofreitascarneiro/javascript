function aposentar(nome, idade, plano){
    if(idade < 10){
        plano = plano + 80
    }else if(idade >= 10 && idade <= 30){
        plano = plano + 50
    }else if(idade > 30 && idade <= 60){
        plano = plano + 95
    }else{
        plano = plano + 130
    }
    return `"O ${nome} cujo a idade é ${idade} ira pagar o total de ${plano}"`
}

let valor_plano = 100
console.log(aposentar('bob', 27, valor_plano))
console.log(aposentar('bob', 47, valor_plano))
console.log(aposentar('bob', 9, valor_plano))
console.log(aposentar('bob', 69, valor_plano))