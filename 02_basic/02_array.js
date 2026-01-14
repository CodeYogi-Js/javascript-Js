const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman","flash", 'batman']

// marvelHeros.push(dcHeros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvelHeros[3][1])

// marvelHeros.concat(dcHeros)//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros)

const allHeros = marvelHeros.concat(dcHeros)

console.log(allHeros)

const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros)

const anotherArray = [1, 2, 3,[4, 5, 6],7, [6, 7, [4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)


console.log(Array.isArray("RyanDahl"))
console.log(Array.from("BrendanEich"))
console.log(Array.from({name: "Brenden Eich"}))// intersting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
