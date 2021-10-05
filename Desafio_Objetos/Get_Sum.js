//Create the function that takes an array with objects 
//and returns the sum of people's budgets.


const budgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];


const resultado = budgets.map(v => v.budget).reduce(function(acumulador, valor) {
    console.log(acumulador, valor)

      acumulador + valor
})

console.log(resultado)


