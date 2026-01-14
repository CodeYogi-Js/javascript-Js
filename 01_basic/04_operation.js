//***************************Operations**********************
let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "Brendan"
let str2 = "Eich"

let str3 = str1 +"  "+ str2
console.log(str3)

//Complex situation
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1"+ 2 + 2)
// console.log(1 + 2 + "2")
// console.log(null + 1);      // 1
// console.log(undefined + 1); // NaN


// Type coercion means JavaScript automatically converts one data type to another when needed—especially in operations involving mixed types (like strings and numbers).
console.log('10' - '4');     // ?
console.log(false + 'true'); // ?
console.log(null == 0);      // ?
console.log(undefined == null); // ?


//JavaScript Operator Precedence
console.log((3+4)*5 %3)
console.log(+true)

// When operators have same precedence, JavaScript uses associativity:
// 1. ( )         → Grouping (do first)
// 2. **          → Exponentiation (right to left)
// 3. *, /, %     → Multiply, Divide, Modulo (left to right)
// 4. +, -        → Add, Subtract (left to right)

// - Left-to-right: +, -, *, /
// - Right-to-left: =, **, ? :



// console.log(true+) //not possible

console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


//Increment Operator and Decrement Operator //prefix and postfix
let gameCounter = 100
gameCounter++;
console.log(gameCounter)