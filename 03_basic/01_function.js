// A function is a reusable block of code that performs a specific task when called.
// function sayMyName(){
//     console.log("R")
//     console.log("y")
//     console.log("a")
//     console.log("n")
// }
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumber(3,null)

// const result = addTwoNumber(3, 5)
// console.log(`result value :${result}`)


// function add(num1, num2){
//     let res = num1 + num2
//     return res
//     console.log("ryan")//- Once return is hit, the function exits immediately.

// }
// const res = add(3, 7)// inside function variable name and out side function variable name are different beacuse of function scope
// console.log(`Result :${res}`)


// function loginUserMessage(userName = "sam"){
//     if(!userName){
//         console.log(`Please enter a User Name.`)
//         return
//     }
//     return (`${userName} just logged In.`)
// }
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2,...num1){
    // rest operator
    const array = num1
    value = 0
    for(let i = 0 ; i < array.length; i++){
        value += array[i]
    }
    return value
}
// console.log(calculateCartPrice(200, 400, 500, 500, 100))

const user = {
    username: "ryan dahl",
    price: 199
}
function handelObject(anyObj){
    console.log(`user name is ${anyObj.username} and price is ${anyObj.prices}`)
}
handelObject(user)
handelObject({
    username: "Brendan Eich",
    prices: 939
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([22, 53, 56, 28]))