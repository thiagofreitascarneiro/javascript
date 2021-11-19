//Write a class called Name and create the following 
//attributes given a first name and last 

class Name {
    constructor(fname, lname){
        this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
        this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
        this.fullname = `${this.fname} ${this.lname}`;
        this.initials = `${this.fname[0]}.${this.lname[0]}`
    }
}

a1 = new Name("john", "SMITH")

console.log(a1.fname)

console.log(a1.lname)

console.log(a1.fullname)

console.log(a1.initials)
