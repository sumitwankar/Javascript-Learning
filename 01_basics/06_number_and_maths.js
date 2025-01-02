const score = 100
// console.log(score);

const bal = new Number(200)
console.log(bal);

// console.log(bal.toString());
// console.log(bal.toString().length);
// console.log(bal.toFixed(2));
// console.log(typeof bal);

const otherNumber = 123.8721
// console.log(otherNumber.toPrecision(4));

const numb = 1000000
// console.log(numb.toLocaleString("en-IN"));


// ***********maths************

console.log(Math);  // support only browser
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // output between 0 and 1.  ex- 0.342352352
console.log(Math.random() * 10); // ex  output  3.42352352
console.log((Math.random() * 10) + 1);  // it means output alawys 1 and greater than 1 
console.log(Math.floor(Math.random()*10) + 1); // The largest integer smaller than or equal to Math.random()


const min = 10
const max = 20
 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)