const course = {
    coursename: "Javascript",
    price: "250",
    author: "coder"
}

// console.log(course.coursename); 


// Object Destructor
// const {coursename} = course
const {coursename: cname} = course

console.log(cname);


// JSON 
// {
//     "name": "sumit",
//     "gmae": "CS"
//     "score": "85"
// }


// JSON in array format 
[
    {}, //object
    {},
    {}
]