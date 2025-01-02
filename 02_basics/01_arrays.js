const myArr = [1, 2, 3, 4, 5,]
const mixArr = ["Marvel", "DC", 100, 200]

const myArr2 = new Array(1, 2, 3)  // New method to declare array

// console.log(myArr);
// console.log(myArr[4]);

// Array Method

// myArr.push(10) // add element last pos
// myArr.pop() // remove last pos element

// myArr.unshift(10) // add element fist pos
// myArr.shift() // remove element fisrt pos

// console.log(myArr.includes(5));  // check element are present or not
// console.log(myArr.indexOf(9));  // sarches an array for an element value and returns its position.
// console.log(myArr.indexOf(4));


// const newArr = myArr.join() // convert array into string

// console.log(myArr);
// console.log(newArr);


// ***SLICE, Splice

// Slice = slice() method returns selected elements in an array, as a new array.
// selects from a given start, up to a (not inclusive) given end.
// does not change the original array.
console.log("Original", myArr);

const arrSlice = myArr.slice(1, 4)
console.log("Slice", arrSlice);


// Splice = splice() method adds and/or removes array elements.
// method overwrites the original array.
console.log("Original", myArr);
const arrSplice = myArr.splice(1, 3)
console.log("Splice", arrSplice);
console.log("Original", myArr);
