// Singleton 
//Object.create


//Object Literals
const mySym = Symbol("key1")
const jsUser = {
    name: "Ryan",
    "full name": "Ryan Dahl",
    [mySym]: 101,
    age: 18,
    email: "ryandahl@google.com",
    location: "jodhpur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["age"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])

// Object.freeze(jsUser)
jsUser.email = "ryanDahl@chatgpt.com"

console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this["full name"]}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())