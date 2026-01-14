// Primitive Data Type
// 7 type : string, number, bigInt, null, boolean, undefined, Symbol
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol("234")
const anotherId = Symbol("234")
console.log(id === anotherId)
// const bigNumber = 2343545345435534534543354n


//Reference(Non-Primitive)
//Array, Object, functions
const heros = ["Shaktiman","naagraj","doga"]

let myObj = {
    name:"ryan dahl",
    age: 22,
}

const myFunction = function(){
    console.log("hello World!")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)



//JavaScript is a dynamic type language.
//This means you don't need to declare the data type of a variable before using it.
//Statically typed languages require you to declare the type of a variable.

