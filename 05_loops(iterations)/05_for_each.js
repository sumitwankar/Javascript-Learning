// for each

const car = ["maruti", "hero", "honda", "kia", "volvo"]

// simple function method
// car.forEach( function (item) {
//     console.log(item);
// })

// arrow function method
// car.forEach( (item) => {
//     console.log(item);
// })


// function print(item){
// console.log(item);
// }

// car.forEach(print)


// object in array 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item);
    console.log(item.languageName);
})