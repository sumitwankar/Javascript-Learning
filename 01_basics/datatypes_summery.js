//  Primitive = call by value , copy original value 

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined value 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);                      

const bigNumber = 23141434243242423n


// Reference (Non-primitive) > call by reference

// Array
const heros = ["shaktiman", "naagraj", "doga"];

// Object
let myObj = {
    name: "hitesh",
    age: 22,
}

// Function
const myFunction = function(){
    console.log("Hello world");
}

// number = number
// string = string
// boolean = boolean 
// null = Object
// undefined = undefined
// bigInt = bigint
// symbol = symbol

// object = object
// array = object
// function = function(object)

// Stack (Primitive) = it is use copy value
// Heap (Non-Primitive) = it is use original value


// Stack (Primitive) example 
let myNumber = 12345
let anotherNumber = myNumber
anotherNumber = 98765 

console.log(myNumber);
console.log(anotherNumber);

// Heap (Non-Primitive) example
let userOne = {
    email: "qwerty@mail.com",
    pass: "12345",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "zxcvbnm@mail.com"

console.log(userOne.email);
console.log(userTwo.email);