// for
// A for loop lets you repeat a block of code a specific number of times.

// for (initialization; condition; update) {
//     // code to run each time
// }

for(let i = 1 ; i < 11; i++){
    // console.log(`the value of i : ${i}`)
}

for(let i = 0; i <= 10; i++){
    const element = i;
    if(element === 5){
        // console.log("5 is best Number");
    }
    // console.log(element)
}

for(let i = 1; i <= 10; i++){
    // console.log(`outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        // console.log(`inner loop value ${j} and outer loop ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ["flash","batman","superman"]
for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    // console.log(element)
}



// break and continue

// for (let index = 1; index <= 10; index++) {
//     if(index === 5){
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`)
// }

// for (let index = 1; index <= 10; index++) {
//     if(index === 5){
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${index}`)
// }


//While Loop
let num = 1
while(num < 11){
    // console.log(num);
    num++;
}


const movies = ["Inception", "Interstellar", "The Matrix", "Parasite", "Spirited Away", "The Dark Knight"];
let index = 0
while(index < movies.length){
    // console.log(movies[index])
    index++
}


//Do while Loop
// let inx =0
// do{
//     console.log(movies[inx])
//     inx++
// }while(inx < movies.length)



//For of Loop
const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    // console.log(val)
}
const greeting = "Hello World"
for(const greet of greeting){
    // console.log(greet)
}

//Maps data type
// In JavaScript, a Map is a built-in object that stores key-value pairs, just like an object

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "United State of America")
map.set("FR","France")
map.set("IN", "INDIA")
// console.log(map)
// console.log(typeof map)
for(let key of map){
    // console.log(key)
}
for(const [key,val] of map){
    // console.log(key,":-",val)
}

// const myObj = {
//     game1: "nfs",
//     game2: "spiderman",
// }
// for(const [key,val] of myObj){
    // console.log(key, val)
// }

//✅for of loop work array, string, map, Not work Object


//✅For in loop work Object, array, string, Not work map
//Give direct value key
// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: 'swift by apple',
// }
// for (const key in myObject) {
//     console.log(key)
// }
// for (const key in myObject) {
//     console.log(myObject[key])
// }

// const programming = ["js", "rb", "py", "java", "cpp"]
// for(const val in programming){
//     console.log(programming[val])
// }

// const mystring = "Brendan Eich"
// for(const key in mystring){
//     console.log(mystring[key])
// }

for(const key in map){
    console.log(key)
}