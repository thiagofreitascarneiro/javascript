for (let letra of'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

// for in percorre em cima de indice
for (let i in assuntosEcma) {
    console.log(i)
}

// for of percore pelos valores
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let chave of assuntosMap.values()) {
    console.log(chave)
}

for (let chave of assuntosMap.entries()) {
    console.log(ch, vl)
}

