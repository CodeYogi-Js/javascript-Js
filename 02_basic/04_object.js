// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1234ahbc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstName);//? quetion mark protection api response
//✅✅✅? is called the optional chaining operator
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 =Object.assign({},obj1,obj2,obj4)// Two parameter Target and Source
const obj3 = {...obj1, ...obj2, ...obj4}// spread Operator

console.log(obj3)

//Most Common Syntax used Come value form data base.
const users = [
    {
        id: 1,
        email: "na@gmail.com"
    },
    {
        id: 1,
        email: "na@gmail.com"
    },
    {
        id: 1,
        email: "na@gmail.com"
    },
    {
        id: 1,
        email: "na@gmail.com"
    },
]

console.log(users[0].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLogged"))

//+++++++++++++++++++++++++++++destructuring in javascript object+++++++++++++++++++++++++++
// Object destructuring is a way to pull out values from an object and store them in variables easily.
// Imagine an object is a lunchbox with labeled compartments.
// Destructuring lets you grab each item by its label and put it directly on your plate.


const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "ryan Dahl"
}

// const {courseInstructor} = course // if you think courseInstructor is big name you can small it.
const {courseInstructor : instructor} = course

console.log(instructor)




// 🔌 API (Application Programming Interface)
// An API is like a messenger between two software programs.
// It lets one app ask another app for data or services.
// 🧠 Example:
// Your weather app uses an API to ask a weather server:
// “Hey, what’s the temperature in Tamluk?”
// The server replies with the data.

// 📦 JSON (JavaScript Object Notation)
// JSON is the language that data often travels in.
// It’s a simple format that looks like JavaScript objects.

// APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

// JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition