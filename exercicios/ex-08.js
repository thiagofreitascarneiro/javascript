function jogo(jogos) {
   var contador = 0
   var recorde = []
   var cont = 0
   for(partida in jogos){
       if(cont == 0){
        var maior = jogos[partida]
        var menor = jogos[partida]
       }else if(cont > 0){
            if (jogos[partida] > maior){
                maior = jogos[partida]
                contador = contador + 1
            }else if (jogos[partida] < menor){
                var pior_jogo = partida
            }

       }
        cont = cont + 1

   } 
recorde.push(contador)
recorde.push(pior_jogo)
return recorde
}

var lista_jogos = [10, 20, 20, 8, 25, 3 ,0, 30, 10]
console.log(jogo(lista_jogos))

