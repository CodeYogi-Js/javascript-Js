//+++++++++++++++++++++++Array++++++++++++++++++++

//In JavaScript, an array is a well-structured collection of elements like numbers, strings, or other values. It’s used to store multiple items together in one place.

const myArray = [0, 1, 2, 3, 4, 5]

console.log(myArray)


//JavaScript Array-copy Operations Create Shallow Copies.
//A Shallow copy of an object is a copy whose properties share the same references points.
//A Deep copy of an object is a copy whose properties do not share the same references

const myHeros = ["shaktiman", "naagraj"]
const myArr = new Array(1, 2, 3, 4)
console.log(myArr[0])

//Array Method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.includes(3))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof(newArr))

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log("C ", myArr)
console.log(myn2)