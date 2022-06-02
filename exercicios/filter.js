const alunos = [
    {nome: 'João',nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.9, bolsista: true}
]

notaBoa = alunos.filter(n => n.nota > 9)

console.log(notaBoa)