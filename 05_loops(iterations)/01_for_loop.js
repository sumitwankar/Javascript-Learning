// ***for loop

for(let i = 0; i <= 10; i++){
    const element = i 
    if(element == 5){
        // console.log("Number 5");
    }
    // console.log(element)
}

// nested loop
for(let i = 0; i <= 10; i++){
    // console.log(`Outer loop value = ${i}`)
    for(let j = 0; j <= 10; j++){
        // console.log(`Inner loop = ${j} inner loop value = ${i}`);
    }
}

// nested loop example
for(let i = 1; i <= 10; i++){
    // console.log(`${i}'s table`);
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = `, i * j );        
    }
}


let myArray = ["Thor", "Ironman", "Hulk", "Antman", "Thonos"]
console.log(myArray.length);

for(let index = 0; index < myArray.length; index++){
    const value = myArray[index];
    // console.log(value);
}


// break 

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        // console.log("Detected 5");
        break
    }
    // console.log(`Value of is ${index}`);
}


// continue
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value of is ${index}`);
}