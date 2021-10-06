//Write a class called Name and create the following 
//attributes given a first name and last 

function Name(name, last_name){
    this.first_name = name
    this.last_name = last_name
}


a1 = new Name("john", "SMITH")

console.log(a1.first_name)
console.log(a1.last_name)
