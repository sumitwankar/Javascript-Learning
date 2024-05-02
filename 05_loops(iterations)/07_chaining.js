const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const tenAdd = numArray.map( (num) => num + 10)
// console.log(tenAdd);

// Chaining 
// one line chaining
const chaining = numArray.map( (num) => num * 10).map( (num) => num + 2).filter( (num) => num >= 55)
// also you can write chaingin code this way 
// const chaining1 = numArray
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 2)
//                 .filter( (num) => num >= 55)
console.log(chaining);


// Adding 10 in array items using forEach method
const newNew = numArray.forEach( (val) => {
    if(!val == 0){
        const dt = val + 10
        // console.log(dt);
    }
})