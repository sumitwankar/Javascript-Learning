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