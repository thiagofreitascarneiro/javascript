//Create a function that determines whether a shopping order is eligible for free shipping. 
//An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.


const store = 
    { "Shampoo": 5.99, 
    "Rubber Ducks": 15.99,
    "books": 33.78,
    "glass": 12.99,

    }
 
function freeShipping(order) {
    total = 0
    for (i in order){
        total = order[i] + total

    }if(total > 50){
            return 'free shipping'
    }else{
        return 'you must to pay 10$ for the order.'
    }
}

console.log(freeShipping(store))

// using reduce 
const freeShipping2 = o =>
 Object.values(o).reduce((a,b)=>a+b) > 50;

 console.log(freeShipping2(store))