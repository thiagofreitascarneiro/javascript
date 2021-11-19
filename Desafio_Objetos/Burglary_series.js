//You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".


const stolenItems = {
    tv: 300,
    skate: 20,
    stereo: 50,
    notebook: 250,
    car: 24000,
  }

  function calculateLosses(obj) {
      let total = 0 
      for(values in obj){
          total = obj[values] + total 
      }
      if(total === 0){
        return 'Lucky you!'
    }else{
        return total
    }
}

const stolenItems2 = {
   
  }

console.log(calculateLosses(stolenItems))

console.log(calculateLosses(stolenItems2))


