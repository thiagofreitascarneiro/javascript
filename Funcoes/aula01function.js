function funcao() {
    console.log(arguments[9])
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 0,10, 11)


function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
}

conta('+', 0, 1, 20, 30, 40, 50);


const nome = 'thiago'

function falaNome() {
    console.log(nome)
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}

usaFalaNome()