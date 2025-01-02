const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // its takes array as an element
// Output = [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);  // accessing value of inside array


// const allheros = marvel_heros.concat(dc_heros)  // it's merg two array
// console.log(allheros);


// const all_new_heros = [...marvel_heros, ...dc_heros] // new way to concat two array 
// console.log(all_new_heros); // similar to concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(2)  // set depth in flat method,and this is proper way to use flat method
const real_another_array = another_array.flat(Infinity) // all array convert into one array
console.log(real_another_array);


console.log(Array.isArray(marvel_heros)); // check array or not
console.log(Array.isArray("Sumii"))  // check array or not

console.log(Array.from("Sumit")) // convert given value in array
console.log(Array.from({name: "Sumit"})) // interview interesting, output will be empty bracket, beacause we need to tell specifiac value to convert into array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
