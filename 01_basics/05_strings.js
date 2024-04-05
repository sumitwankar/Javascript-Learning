const name = "qwertykey"
const account = 9

// console.log(name + account + " account");

// this is a modern way to use string
console.log(`My account name is ${name} and total account is ${account}`);

const gameName = new String('qwerty')
console.log(gameName);
// console.log(gameName[0]); 
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('x'));

const newString = gameName.substring(0, 4) // before 4 all value print
console.log(newString);

const anotherString = gameName.slice(-6, 3)
console.log(anotherString);

const newStringOne = "   qwerty    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove white space

const url = "https://wxw.qwertyok.com/qwertyok%20okok"
console.log(url.replace('%20', '-')) 

console.log(url.includes('ert'))
console.log(url.includes('zxc'))

console.log(gameName.split('-'));