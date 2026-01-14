const user = {
    userName: "ryan Dahl",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} , Welcome to Website`)
        console.log(this)
    }
}
//this refers to the object that is calling the function.

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// console.log(this)//node enviroment show empty Object


//An arrow function is a compact way to write functions using the => syntax. It does not have its own this, and is often used for short, anonymous functions or callbacks.

// function chai(){
//     let userName = "ryan dahl"
//     console.log(this)
//     //console.log(this.username)//not work inside function
// }
// chai()

const chai = ()=>{
    let name = "Brendan Eich"
    console.log(this)
}
// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//implicit return
// const addTwoNum = (num1, num2)=> num1 + num2
// const addTwoNum = (num1, num2)=> (num1 + num2)

// Implicit Return: A function automatically returns a value without using the return keyword.
// Explicit Return: A function uses the return keyword to manually specify the value to return.


// const addTwo = (num1, num2)=>({username: "ryan"})
const addTwo = (num1, num2)=>({username: "ryan"})
console.log(addTwo(3,5))


// - The arrow function takes two parameters: num1 and num2.
// - It returns an object: { username: "ryan" }
// - The parentheses around the object are required—they tell JavaScript you're returning an object, not starting a block.

