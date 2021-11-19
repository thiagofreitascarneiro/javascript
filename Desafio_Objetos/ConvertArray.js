//Write a function that converts an object into an array of keys and values.

array_insta = {
    likes: 2,
    dislikes: 3,
    followers: 10
  }

function objectToArray(obj){

     return Object.entries(obj)
}


console.log(objectToArray(array_insta))