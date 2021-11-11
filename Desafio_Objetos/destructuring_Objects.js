//Given an array of user objects.

let names = []

let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]

 const emails = users.map(e => e.email)

for(i in users) {
    
      names.push(users[i].name)
}

console.log(names) 
console.log(emails)

