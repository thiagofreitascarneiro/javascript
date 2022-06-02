let = colabJSON = '{"colaboradores":['+
'{"nome":"Bruno","salario":10000,"idade":40},'+
'{"nome":"Bob","salario":20000,"idade":30},'+
'{"nome":"Bruna","salario":3000,"idade":20},'+
'{"nome":"Bill","salario":40000,"idade":49}'+

']}'


let c_obj = JSON.parse(colabJSON)

console.log(c_obj.colaboradores)

const somaSalario = c_obj.colaboradores.map(sal => sal.salario).reduce((salarioTotal, salarioAtual) => salarioTotal + salarioAtual, 0)


console.log(somaSalario)

