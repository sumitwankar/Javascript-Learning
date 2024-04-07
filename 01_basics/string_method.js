const nameString = "Just Name."
// console.log(nameString);

// String constructor 
const stringName = new String("String Method");
console.log(stringName);

// ***The length property returns the length of a string
console.log(stringName.length);

// ***indexOf 
console.log(stringName.indexOf('i'));

// ***The charAt() method returns the character at a specified index (position) in a string
console.log(stringName.charAt(5));

// ***The charCodeAt() method returns the code of the character at a specified index in a string:The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(stringName.charCodeAt(3)); 

// ***NEW METHOD 
// ***The at() method returns the character at a specified index (position) in a string.
console.log(stringName.at(8));

// ***slice() extracts a part of a string and returns the extracted part in a new string.
// 2 parameters: start position, and end position (end not included).
console.log(stringName.slice(2, 9));
// console.log(stringName.slice(5)); //will slice out the rest of the string.
// console.log(stringName.slice(-5)); // position is counted from the end of the string.

// ***substring() is similar to slice(). substring not allowed negative value.
console.log(stringName.substring(2, 9));

// ***A string is converted to upper case with toUpperCase():
console.log(stringName.toUpperCase());

// ***A string is converted to lower case with toLowerCase():
console.log(stringName.toLowerCase());

// ***concat() joins two or more strings.
const newString = " in javascript."
// console.log(stringName + newString);
const okString = stringName.concat("", newString);

// ***The trim() method removes whitespace from both sides of a string.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string
const fullString = "         what      ";
console.log(fullString);
console.log(fullString.trim());

// ***The padStart() method pads a string from the start.
let ok = "5";
let padded = ok.padStart(5, "*")
console.log(padded);

// ***The padEnd() method pads a string from the end.
let notOk = "5";
let againPadded = notOk.padEnd(5, "x")
console.log(againPadded);

// ***The repeat() method returns a string with a number of copies of a string. It returns a new string. This method does not change the original string.
 console.log(stringName.repeat(5));

 // ***The replace() method replaces a specified value with another value in a string.
 const url = "www.gooogle.commm/qwerty@zwerty@page"
 console.log(url.replace('@', '-'));
 console.log(url.replaceAll('@', '-'));

// ***A string can be converted to an array with the split() method.
const thisString = "qwerty, zwerty, ok, notok."
const word = thisString.split(' ');
console.log(word[2]);