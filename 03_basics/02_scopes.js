var a = 100
let b = 200


if (true){
    var a = 10;
    let b = 20
    // console.log("Inside value = ", b);
}

// console.log(a);
// console.log(b)

// Nested scope 
function one(){
    const usrename = "Sumit"

    function two(){
        const website = "just.com"
        console.log(usrename);
    }

    // console.log(website); // inaccessible because it outside the scope

    two()
}

one()

if(true){
    const username = "Sumit"

    if(username === "Sumit"){
        const website = "just.com"
        console.log(username + website);
    }

    // console.log(website); // inaccessible
}
// console.log(username); // inaccessible


// ******** Hoisting(Important) ********

console.log(addone(5));

function addone(num){
    return num + 1
}

addtwo(10)

const addtwo = function(num){
    return num + 2
}