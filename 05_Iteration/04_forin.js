const obj = {
    p : "python",
    c : "c",
    j : "java"

}

//for in is used for objects iterantion

for (const key in obj) {
    // console.log(obj[key]);
}

const arr = ['one','two','three'];
for (const key in arr){
    // console.log(arr[key]);
}

const map = new Map;
map.set("in","India")
map.set("us","United states")
map.set("fr","France")
//map is not iterable
for (const key in map){
    // console.log(key);
}