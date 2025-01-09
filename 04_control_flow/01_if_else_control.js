/*** if flow ***/
const isUserLoggedIn = true

// <, >, <=, >=, ==, !=, ===, !==

// if(isUserLoggedIn){
//     console.log("Code excuted");
// }



/**** if-else ****/
const temperature = 41

// if (temperature >= 41){
//     console.log("less than 50");
// } 
// else {
//     console.log("temperature is greater than 50");
// }
// console.log("Always executed");


/*** Scope Error ***/
const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);



/*** one line if syntax (bad code) ***/
const balance = 1000
// if(balance > 500) console.log("Test");  // implicit scope

// if(balance > 500) console.log("Test"), console.log("test2");


/*** Nested if else ***/
    // if (balance < 500) {
    //     console.log("less than 500");
    // } 
    // else if (balance < 750) {
    //     console.log(("less than 750"));
    // }
    // else if(balance < 900) {
    //     console.log("less than 900");
    // }
    // else {
    //     console.log("less than 1200");
    // }



// *** && || logical operator
const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}