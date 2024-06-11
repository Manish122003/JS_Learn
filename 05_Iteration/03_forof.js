// for of
const arr = ['one','two','three'];
for (const i of arr) {
    // console.log(i);
}

const z = "hello world"
for (const i of z){
    // console.log(i);
}


//map

const map = new Map
map.set("in","India")
map.set("us","United states")
map.set("fr","France")
map.set("fr","France")
map.set("un","United Nation")

// console.log(map)

for (const i of map){
    // console.log(i);
}
for (const [key,val] of map){
    // console.log(key,val);
}

//can use forof loop for map array string..etc
//can not use forof loop for objects
// const game = {
//     'game1' : "NFS",
//     "game2" : "spiderman"
// }

// for (const [key, val] of game) {
//     console.log(key,val);
    
// }