// Immediately Invoked Function Expressions (IIFE) 
// between two IIFE semicolon is important 


 // named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();


 // unnamed IIFE
( () => {
    console.log(`DB CONNECTED TWO`);
} )();

// parameter IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')