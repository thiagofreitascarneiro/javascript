function dinheiro(valor) {
    valor_real = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valor_real)

}


dinheiro(0.1 + 0.2)