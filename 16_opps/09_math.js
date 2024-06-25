const discriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(discriptor);
//o/p:- {
//       value: 3.141592653589793,
//       writable: false,
//       enumerable: false,
//       configurable: false
//       }

// console.log(Math.PI);
// Math.PI = 7  // cannot override
// console.log(Math.PI);

const name = {
    name : "new name",
    price : "12",
    isAvailable : true,
    fun : function(){
        console.log("not availabe");
    }
}
console.log(name)
//Object is not iterable so to iterate it we use
for (const [key,value] of Object.entries(name)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}


// console.log(Object.getOwnPropertyDescriptor(name,"name"));  // to get properties we need two parameters 1st for object name secont for object item
Object.defineProperty(name,'name',{
    writable:false,
    enumerable:false
})

// console.log(Object.getOwnPropertyDescriptor(name,"name"));

for (const [key,value] of Object.entries(name)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}// here we will not get name as iterable as we have defined the property for name enumerable as false 