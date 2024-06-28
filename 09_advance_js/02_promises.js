// ***Promise - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network calls

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})


// ***Promise in single block
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Task 2 resolved");
})

// ***Passing value
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "jsuser", email: "jsuser@email.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    console.log("Task three done");
})


// ***Resolve and Reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Conan", pass: "1234"})
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( ()=> {
    console.log("The promise is either resolved or rejected");
})


// ***async , awaits approach

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Conan", pass: "1234"})
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000)
})

async function conusemePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}

conusemePromiseFive()


//  ***json data fetch using async,await

async function getAllusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log("EEE ", error);
//     }
}
// getAllusers()


// ***json data fetching using then,catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch(() => {
    console.log(error);
})


// ***Promise All method
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
