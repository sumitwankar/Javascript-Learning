// for in

// for in loop over an object
const lang = {
    js: "javascript",
    py: "python",
    ts: "typescript",
    asm: "assembly"
}

// 
for (const key in lang) {
//    console.log(key);  // key output
//    console.log(`${key} shortcut for ${lang[key]}`);
}


// for in loop over an array
const hardware = ["ram", "cpu", "drive", "fan"]

for (const h1 in hardware) {
    // console.log(h1); 
    // console.log(hardware[h1]);
}

// for in loop over a map
const mapname = new Map()
mapname.set('in', "india")
mapname.set('usa', "United states of america")
mapname.set('fr', "france")
mapname.set('in', "india")
mapname.set('nz', "new zeland")

for (const key in mapname) {
    console.log(key);
}
// map is not iterable in for-in loop