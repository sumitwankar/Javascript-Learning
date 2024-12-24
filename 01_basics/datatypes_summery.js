//  Primitive datatypes = call by value , copy original value 

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution. 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined value 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false              

const bigNumber = 23141434243242423n


// Non-primitive datatypes = call by reference , reference of original value

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


// typeof 
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


/************STACK AND HEAP **************/
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