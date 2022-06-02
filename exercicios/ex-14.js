function fruta(nome_fruta){

    switch(nome_fruta){
       case 'maçã':
            return `" Não vendemos ${nome_fruta} aqui "`
            break
       case 'melancia':
            return `"Aqui está, são 3 reais o quilo da ${nome_fruta} "`
            break
       case 'Kiwi':
           return `"Estamos com escassez de ${nome_fruta}" `
           break
       default:
           return "erro no console" 

    }
}

console.log(fruta('maçã'))
console.log(fruta('melancia'))
console.log(fruta('banana'))
