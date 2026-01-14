const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

const value = 100.0000
console.log(value.toFixed(1))

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN"))

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//++++++++++++Maths+++++++++++++
console.log(Math.abs(-4))// Negative to positive
console.log(Math.round(4.4))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,6,8))
console.log(Math.max(354,46,23,562,34,61,22))

console.log(Math.random())
console.log(Math.floor((Math.random()*10 )+ 1))


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max -min + 1)) + min)