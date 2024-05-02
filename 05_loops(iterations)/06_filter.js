// forEach loop cant return 
const car = ["maruti", "hero", "honda", "kia", "volvo"]

// const values = car.forEach(  (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

// ***filter
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArr = myArr.filter(  (arrVal) => arrVal > 5) // implicit function
const newArr = myArr.filter(  (arrVal) => { // explicit function
    return arrVal > 5
})
// console.log(newArr);

// forEach method for manipulating array
const myArray = []

myArr.forEach( (item) => {
    if(item > 5){
        myArray.push(item)
    }
})
// console.log(myArray);

// Playing array with filter method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let newData = books.filter( (bk) => bk.genre === "History")

  newData = books.filter( (bk) => {
    return bk.publish > 1990 && bk.genre === "History"
  })

//   console.log(newData);