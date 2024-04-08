// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sumit",
    "full name": "Sumit ok",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age: 20,
    location: "Mumbai",
    email: "wowemail@emali.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email) // accessing object element common
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(typeof JsUser.mySym); // string
// console.log(JsUser[mySym]);

JsUser.email = "notok@email.com"
// Object.freeze(JsUser)
JsUser.email = "whatemaill@ok.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

