function jogo(jogos) {
   var contador = 0
   var recorde = []
   var cont = 0
   for(partida in jogos){
       console.log(partida)
       //console.log(cont)
       if(cont == 0){
        var maior = jogos[partida]
       }else if(cont > 0){
            if (jogos[partida] > maior){
                maior = partida
                contador = contador + 1
                console.log(maior)
                console.log(contador)
            }

       }
        cont = cont + 1

   } 
recorde.push(contador)
return recorde
}

var lista_jogos = [10, 20, 20, 8, 25, 3 ,0, 30, 1]
console.log(jogo(lista_jogos))

