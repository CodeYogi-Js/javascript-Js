//Switch Case
const month = 3
switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("february")
        break
    case 3:
        console.log("march")
        break
    default:
        console.log("Not match month")
}

// const months = "march"
// switch(months){
//     case "january":
//         console.log("January")
//         break
//     case "february":
//         console.log("february")
//         break
//     case "march":
//         console.log("march")
//         break
//     default:
//         console.log("Not match month")
// }


//Truthy value 
const userEmail = "ryan@dahl.ai"
if(userEmail){
    console.log("got user email.")
}else{
    console.log("don't have user email.")
}
// false , 0, "", -0, bigInt 0n, null, undefined, NaN
// truthy value , "0", "false", " ", [], {}, function(){}

const array = []
if(array.length === 0 && Array.isArray(array)){
    console.log("array is empty.")
}
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("object is empty")
}

//Ternary Operator
array.length  === 0 ? console.log("empty") : console.log("Not empty");

//Nullish Coalescing Operator(??)
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)