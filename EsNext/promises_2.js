/*setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')
    }, 2000)
}, 2000)*/


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

//esperarPor(3000).then(texto => console.log(texto))


function esperarPor2(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Executado')
        }, tempo)
    })
}

//esperarPor2(3000).then(text => console.log(text))

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
