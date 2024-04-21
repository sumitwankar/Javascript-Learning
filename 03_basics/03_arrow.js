//  "this" keyword refers to the current context or scope within which code is executing.

const user = {
    username: "Sumit",
    score: "95",

    welcomeMessage: function() {
        console.log(`${this.username} welcome to the website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); // Showing empty {} value in node environment but in browser console shows actual properties 


// function thisFunction() {
//     let username = "sumit"
//     console.log(this);
//     console.log(this.username); // undefined, this keyword work in only object
// }
// thisFunction()

// const holdFunction = function againThis() {
//     let username = "sumit"
//     console.log(this);
//     console.log(this.username); 
// // }
// holdFunction()


// Arrow function  " () => {} "
const arrowFunction = () => {
    let message = "learning arrow function"
    // console.log(message);  // normal output
    // console.log(this.message); // undefined
    // console.log(this); // empty {} value
}
arrowFunction()

// Explicit function: In explicit function we use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// Implicit function: we not use return keyword
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: " Sumit"})

console.log(addTwo(10, 11))

const myArray = [2, 4, 2, 6, 1]
// myArray.forEach()
// myArray.forEach(() => {})