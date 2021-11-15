produtos = [
    {nome: "Bob", idade: 18, sexo: 'M', empregado: true},
    {nome: "Billy", idade: 27, sexo: 'M', empregado: true},
    {nome: "Judite", idade: 28, sexo: 'F', empregado: true},
    {nome: "Bruna", idade: 18, sexo: 'F', empregado: false},
    {nome: "Valesca", idade: 38, sexo: 'F', empregado: false},
    {nome: "Didi", idade: 55, sexo: 'M', empregado: true},
    {nome: "Douglas", idade: 22, sexo: 'M', empregado: false},   
]


const woman = produtos.filter((e) => {
    return e.sexo == 'F' && e.idade > 20

})

//console.log(woman)


const man = produtos.map((e) => {
    if(e.idade > 30 ){
        e.nome = 'Lola'
    }
    
})

console.log(man)

const resultado = produtos.map((e) => ({ ...e, name: 'MarketShare' }));
