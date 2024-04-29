// for of

// ["", "", ""]
// [{}, {}, {}]


// for of loop over an Array
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}


// for of loop over a String
const message = "Hello World"
for (const msg of message) {
    // if(msg == " "){
    //     continue
    // }
    // console.log(msg)
}


// Maps 
const mapname = new Map()
mapname.set('in', "india")
mapname.set('usa', "United states of america")
mapname.set('fr', "france")
mapname.set('in', "india")
mapname.set('nz', "new zeland")

// console.log(mapname); // object format output

// for of loop over a map
for (const [map1, value] of mapname) {
    // console.log(map1); // array format output
    console.log(map1, "=", value);
}


// for of loop over an object
const myObject = {
    game1: "CS",
    game2: "NFS",
    game3: "contra"
};

for (const [obj, value] of myObject) {    
    console.log(obj, ":-", value);    
}
// object is not iterable in for-of loop