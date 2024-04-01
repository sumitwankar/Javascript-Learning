const accountId = 134231
let accountEmail = "thisisemail@gmail.com"
var accountPassword = "98231"
accountCity = "Nagpur"
let accountState;

// accountId = 100 // not allowed because const value always constants


accountEmail = "changedemail@gmail.com"
accountPassword = "00000"
accountCity = "Mumbai"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/