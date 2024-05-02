// ***Reduce

// mdn code
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// console.log(sumWithInitial);
// Expected output: 10


// reduce method with normal function
const digitArray = [1, 2, 3, 4]

const addRed = digitArray.reduce(function (acc, curValue) {
    // console.log(`accumlator value = ${acc} and current value = ${curValue}`);
    return acc + curValue 
}, 2)

// console.log(addRed);


// reduce method with arrow function
const arwfun = digitArray.reduce( (accval, curval) => accval + curval, 0)
// console.log(arwfun);


// reduce with example
const shoppingCart = [
    {
    itemname: "Javascript Course",
    price: 2999
    },
    {
    itemname: "PY Course",
    price: 1599
    },
    {
    itemname: "Testing Course",
    price: 2599
    },
    {
    itemname: "Data Science Course",
    price: 10999
    }
]

const TotalCartVal = shoppingCart.reduce( (initVal, currentPrice) => initVal + currentPrice.price, 0)
console.log(TotalCartVal);