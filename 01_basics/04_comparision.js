// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true
// console.log("02" > 1); // true


console.log(null > 0);  // false    null = empty
console.log(null == 0); // false    null = empty
console.log(null >= 0); // true     null converted into 0 
// The reason is that equality check == and comparision > < >= <= work differently.
// Comparisions convert null to a number, treating it as 0.
// Thats why (3) null >=0 is true and (1) null > 0 i false 


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === > check datatype also
console.log("2" === 2); // false