function myName () {
    console.log("s");
    console.log("u");
    console.log("m");
    console.log("i");
    console.log("t");
}

// myName // reference
// myName() // execution


// Created function
function addNumber (number1, number2) {  // parameters
    console.log(number1 + number2);
}

// addNumber(5, 6)  // arguments
// addNumber(5, "6")
// addNumber(5, "a")
// addNumber(5, null)

// const result = addNumber(5, 6)
// console.log("Result:", result); // undefined


// Return method
function addNumber (number1, number2) {  // parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addNumber(5, 6)
// console.log("Result:", result);



function loggedIn(username = "Ron") {  // default value
    // if(username === undefined){
    if(!username){
        console.log("No username");
        return  // function end 
    }
    return `${username} user logged in`
}

// console.log(loggedIn("Sumit"))
// console.log(loggedIn()) // undefined logged in

// console.log(loggedIn("Ronny"))


// REST parameter

function multipleNum(val1,val2, ...num1){
    return num1
}

// console.log(multipleNum(45, 12, 32, 66, 54))


// Object value accessing via function
const user = {
    username: "Sumit",
    score: "955"
}

function objectHandle(anyobj){
    console.log(`${anyobj.username}'s score is ${anyobj.score}`)
}

// objectHandle(user)
objectHandle({      
    username: "Pritam",
    score: "877"
})


// Array value accessing via function
const myarr = [300, 435, 213, 523, 321]

function returnValue(getArrayValue){
    return getArrayValue[2]
}

// console.log(returnValue(myarr));
console.log(returnValue([430, 324, 123, 545, 879]));

