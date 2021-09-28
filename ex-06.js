function juros_simples(capital, taxa, tempo){
    const resultado = capital + ((capital * taxa)/tempo)
    return resultado
}

console.log(juros_simples(10000, 5, 10))



function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosCompostos(100, 10/100, 2));


function juros_composto(capital, taxa, tempo) {
    const resultado = capital * (1 + taxa) ** tempo
    return resultado

}

console.log(juros_composto(10000, 5/100, 10))
