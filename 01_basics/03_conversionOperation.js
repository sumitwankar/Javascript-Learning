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
// console.log(checkThis);
// console.log(typeof(checkThis));

// **********OPERATIONS*********** 

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " pro"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3); // bad code

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2  // bad code


let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

let a = 5  
let b = ++a;

// console.log(a, b); // 6 6

let y = 10
let z = y++;

// console.log(y, z); // 11 10