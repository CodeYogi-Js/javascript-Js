//If

// if(condition){
    //true
// }

const isUserLoggedIn = true
// if(isUserLoggedIn){

// }
//<, >, <=, 2<=2, >=2, ==, !=2
if(2 == "2"){
    // console.log("executed")
}

const temperature = 41
if(temperature < 50){
    // console.log("Less than 50.")
}
else{
    console.log("temperature is greater than 50.")
}

const score = 200
if(score > 100){
    const power = "fly"
    // console.log(`User Power :${power}`)
}

const balance = 100
if(balance > 50) console.log("test")

if(balance < 50){
    console.log("less than 50")
}else if(balance < 75){
    console.log("less than 75")
}else if(balance < 90){
    console.log("less than 90")
}else{
    // console.log("less than 120")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course.")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged In.")
}