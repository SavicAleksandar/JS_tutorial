// Log a statement using console.log()
console.log("Hello World")

// Variables
let age = 25
console.log(age)

const salary = 80000    // const spremenljivko ne moremo spreminjati
console.log(salary)

// spodaj izpiše napako
// const salary = 0
// salary = 80000
// console.log(salary)

// spodaj izpise rezultat 5
// let sum = 0
// sum = 5
// console.log(sum)

// Data Types
// primitive (string, number, boolean, undefined, null, bigInt, symbol type)

// string
const name = "Sandi"
const language = "JS"
const chanell ="Codevolution"

// number
const total = 0
const  pi = 3.14

// boolean
const isPrimaryNumber = true
const isNewUser = false

// undefined
let result
console.log(result)

const res = undefined   //  ce hocemo spremenljivko definirati kot undefined je definiramo vedno z null

// null
const data = null

// non primitive (objects) - collection of values
const person = {
    "firstName": "Bruce",
    "lastName": "Wayne",
    "age": 30
}
console.log(person.firstName)

// arrays
const oddNumbers = [ 1, 3, 5, 7, 9]
console.log(oddNumbers[2])

let a = 10
a = "Sandi"
a = true
console.log(a)  //  zmeraj izpise zadnjo definirano vrednost

// Operators 
// assignment operator
let z = 10

//  arithmetic
let x = 10
let y = 5
console.log(x+y)    //  +, -, *, /, % (modulus), ++ (increment), -- (decrement)

// comparison
console.log(x == y) //  ==, !=, ===, !==, >, <, >=, <=

// logical
const isValidNumber= x > 8 && 8 > y // &&, ||, 
console.log(isValidNumber)

const isValid = true    //  true, false
console.log(!isValid)

//  string
console.log("Bruce " + "Wayne")

const isEven = 10 % 2 ===0 ? true : false   // true : false -> "Is even" : "Not even"
console.log(isEven)

// type conversions
//  implicit conversion - JS automatically convert the type
console.log(2 + "3")    //  string type
console.log(true + "3") //string
console.log("4" - "2")  //string
console.log("5" + null)
console.log(5 + undefined)
//  explicit conversion - manually conversion
console.log(Number("5"))
console.log(Number(""))
console.log(parseFloat("3.14"))
console.log(String(500))
console.log((500).toString())
console.log(Boolean(10))    // null undefined 0 " " NaN

//  equality
// == -> allows coercion
// === -> does not allow coercion
const var1 = 10
const var2 = "10"

console.log(var1 == var2)   // primerja le spremenljivke
console.log(var1 === var2)  // primerja se tip in spremenljivke

// conditional statements
// if, else, else if, switch

// if, else, else if
const num = -5

if(num > 0) {
    console.log("number is positive")
}

if(num > 0) {
    console.log("number is positive")
} else {
    console.log("number is not positive")
}

if(num > 0) {
    console.log("number is positive")
} else if (num < 0) {
    console.log("number is negative")
} else {
    console.log("number is zero")
}

// switch
const color = "red"

switch(color) {
    case "red":
        console.log("color is red")
        break
    case "blue":
        console.log("color is blue")
        break
    case "green":
        console.log("color is green")
        break
    default:
        console.log("not valid color")
}

// looping code
// for, while, do while, for of loop

// for
for(let i = 1; i <= 5; i++) {
    console.log("iteration number " + i)
}

// // while 
// let  i = 1
// while(i <= 5) {
//     console.log("iteration number " + i)
//     i++
// }

// do while
let i = 1
do {
    console.log("iteration number " + i)
    i++
} while (i <= 5)

// for of loop
const numArray = [1, 2, 3, 4, 5]

for (const num of numArray) {
    console.log("iteration number " + num)
}

// functions
function greet(userName) {
    console.log("Good morning " + userName)
}
greet("Sandi")

function add(a,b) {
    return a + b
} 
console.log(add(5, 3))

const arrowSum = (a, b) => a + b
console.log(arrowSum(25, 25))

// spremenljivke znotraj funkcije se ne da klicati izven funkcije

// globalna spremnljivka se lahko kliče znotraj bloka ali funkcije
// globalna spremenljivka ne more prepisati lokalne spremenljivke znotraj bloka ali funkcije