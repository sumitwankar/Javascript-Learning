let point = 33 // number

// console.log(typeof point);
// console.log(typeof(point));


let score = true // string

// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber)); // convert string into number
// console.log(valueInNumber);

//              type        value
// 33 =>        number      33
// "33" =>      string      33
// "33abc" =>   string      NaN
// "gamer" =>   string      NaN
// null =>      object      0
// undefined => undefined   NaN
// true/false =>boolean     1/0


// BOOLEAN
let isLoggedIn = null

let booleanIsLogged = Boolean(isLoggedIn)
// console.log(booleanIsLogged);

// 1 => true
// 0 => false
// "" => false
// "Java" => true


// STRING
let someNumber = 123

let checkThis = String(someNumber)
console.log(checkThis);
console.log(typeof(checkThis));