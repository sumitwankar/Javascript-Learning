const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// Output = [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // similar to concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Sumii"))
console.log(Array.from("Sumit"))
console.log(Array.from({name: "Sumit"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
