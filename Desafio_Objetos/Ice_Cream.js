//Create a function which takes an array of instances from 
//the class IceCream and returns the value of the icecream.

class IceCream {
    constructor(name, value){
    this.flavors = name
    this.cust = value
    
}
    listFlavors(){
        return this.flavors

    }

    prices(){
        let vetor = []
        vetor.push(this.cust)
        const total = vetor.reduce((total, currentvalue) => total + currentvalue)
        return total

    }
}


const ice1 = new IceCream("Chocolate", 13)         
const ice2 = new IceCream("Vanilla", 0)           
const ice4 = new IceCream("Plain", 18)             
const ice5 = new IceCream("ChocolateChip", 3)


ice1.listFlavors()

console.log(ice1.prices())


