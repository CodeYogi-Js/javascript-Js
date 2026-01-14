const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (value){
//     console.log(value)
// })

// coding.forEach((item)=>{
//     console.log(item)
// })



// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

//✅forEach function come thre parameter(item, index, array)
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })


// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName:"python",
//         languageFileName: "py"
//     },
// ]
// myCoding.forEach(function (item, index){
//     console.log(item.languageName)
// })

//✅ forEach loop not return value.


//✅filter Loop
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNums.filter((num)=> {
//     return num > 4
// }) // work condition
// console.log(newNum)

// const newNums = []
// myNums.forEach(function(item){
//     if(item > 4){
//         newNums.push(item)
//     }
// })
// console.log(newNums)


// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];
// const userBooks = books.filter((bk)=> bk.genre === "History")
// const userBooks = books.filter((bk)=> bk.publish >= 1995 && bk.genre === "History")
// console.log(userBooks)


//✅Map
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNums = myNumbers.map((num)=> {return num + 10})

// const newNums = myNumbers.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num>=40)
// console.log(newNums)


//✅reduce
//You're asking about one of the most powerful and elegant tools in JavaScript: the reduce() method. It’s a higher-order array method that lets you boil down an array into a single value—whether that’s a sum, an object, a string, or even another array.

// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   // return updated accumulator
// }, initialValue);

const myNumss = [1, 2, 3]
// const myTotal = myNumss.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
const myTotal = myNumss.reduce((accumulator, currentValue)=> {
  console.log(`accumulator: ${accumulator} and currentval: ${currentValue}`)
  return accumulator + currentValue
},0)
console.log(myTotal)

const shoppingCart = [
  {
    itemName: "js Course",
    price: 2999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999
  }
]

const totalCart = shoppingCart.reduce((acc, curVal)=> acc + curVal.price, 0)
console.log(totalCart)