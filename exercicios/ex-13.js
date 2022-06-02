function diaUtil(dia){
switch (dia){
    case 1: 
    case 2:
    case 3:
    case 4:
    case 5:
        return `"O ${dia} é um dia util."`
    case 6:
    case 7:
        return `"O ${dia} não é um dia util."`
}

}

console.log(diaUtil(5))

console.log(diaUtil(7))