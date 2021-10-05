const budgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];



function getBudgets(arr) {
    const resultado = arr.map(v => v.budget).reduce(function(acumulador, valor) {
          return acumulador + valor
    })
	return resultado
}

console.log(getBudgets(budgets))


// other way to resolve use only reduce
function getBudgets2(arr) {
	const budgets = arr.reduce((total, person) => total + person.budget, 0);
	return budgets;
}



console.log(getBudgets2(budgets))
