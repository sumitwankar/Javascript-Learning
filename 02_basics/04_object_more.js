// const tinderUser = new Object() // singleton object


// const tinderUser = {
//     id: "123abc",
//     name: "Sammy",
//     isLoggedIn: false
// }


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "Sumit",
            lastname: "okok"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // merging multiple object

// const objName = ({}, obj1, obj2, obj3, .....) //always use {} as target object as source.


// spread operator  
const obj3 = {...obj1, ...obj2}
// console.log(obj3);



// Multiple Object in array
const users = [
    {
        id: 1,
        email: "fist@MediaList.com" 
    },
    {
        id: 2,
        email: "second@MediaList.com" 
    },
    {
        id: 3,
        email: "third@MediaList.com" 
    },
]

// console.log(users[1].email);
users[1].email
console.log(tinderUser);


/*** Object Method and Properties ***/

console.log(Object.keys(tinderUser));   //  [ 'id', 'name', 'isLoggedIn' ]
// Object.keys() method returns an array with the keys of an object.

console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]
// Object.values() method returns an array of the property values of an object.

console.log(Object.entries(tinderUser));  //  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// Object.entries() method returns an array of the key/value pairs of an object.


console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // check object own property, it return in true/false
// console.log(tinderUser.hasOwnProperty('isLogged'));