// tagged templates = processa o template 
// dentro de uma funcao 

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}.`)


// parte 2
// Usando Mask

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `RS${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log( `1x de ${preco} ou 3x de ${precoParcela}.`)
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
