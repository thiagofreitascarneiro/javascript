const  getBudgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]

  // reduce ele pega um valor e executa a ordem guardando o resultado.
  result = getBudgets.map(a => a.budget).reduce((acum, atu) => {

    return acum + atu

  })

  console.log(result)



const stolenItems = [{
    tv: 300,
    skate: 20,
    stereo: 510,
    playstation: 700,
}]

result2 = stolenItems.map(e => e).reduce((acum, item) => {
    return acum + item

})

console.log(result2)

