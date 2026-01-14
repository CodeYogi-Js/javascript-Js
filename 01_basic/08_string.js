const name = "Brendan Eich"
const repoCount = 50

console.log(name +" "+ repoCount + " value");

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Ryan-Dahl-hc-com")
//- new is used to create a new object from a constructor function.
//- In this case, String("Ryan Dahl") is wrapped with new, so it becomes a String object, not a primitive string

console.log(gameName[0])
gameName[0] = "A"
console.log(gameName)

// - gameName[0] does return "R" — so it looks like an array, right?
// - But when you try to change gameName[0] = "A", nothing happens.
// Why? Because strings are immutable in JavaScript — even when wrapped in an object like new String().

console.log(gameName.__proto__)// output: {} // empty object
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("a"))
console.log(gameName.toLowerCase())

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "       Brendan Eich       "
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd())
console.log(newStringOne.trimStart())

const url = "https://brendanEich%20google.com"
console.log(url.replace("%20","-"))
console.log(url.includes("brendan"))
console.log(url.includes("sundor"))

console.log(gameName.split("-"))