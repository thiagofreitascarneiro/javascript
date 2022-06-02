const alunos = [
    {nome: 'João',nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.9, bolsista: true}
]

const nota = alunos.map(n => n.nota).reduce((acum, atual) => {
    return acum + atual
})
//console.log(nota)


// Desafio 1 todos os alunos são bolsistas ?
                                 // verificando se todos são verdadeiros
const bolsa = (resultado, bolsista) => resultado && bolsista;
const totalBolsista = alunos.map(a => a.bolsista).reduce(bolsa)
console.log(totalBolsista)

                                        // verificando se apenas um deles são bolsistas
const bolsa2 = (resultado, bolsista) => resultado || bolsista
const totalBolsista2 = alunos.map(a => a.bolsista).reduce(bolsa2)
console.log(totalBolsista2)



const  getBudgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]


  const totalbudget = getBudgets.map(b => b.budget).reduce((acum, total) => {
        return acum + total
  })

console.log(totalbudget)