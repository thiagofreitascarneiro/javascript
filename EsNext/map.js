const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework:true })

console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl,ch) => {
    console.log(ch, vl)
})


