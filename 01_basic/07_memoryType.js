//*************************************
//Stack(Primitive), Heap(Non-Primitive)
let myYoutubeName = "BrendanEichYoutubedotcom"

let anothername = myYoutubeName
anothername = "RyanDahlYoutubedotcom"

console.log(myYoutubeName)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "anonymous@google.com"
console.log(userOne.email)
console.log(userTwo.email)