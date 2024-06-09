//singleton  whenever we make object using constructor than it is singleton but by other ways it is not singleton it has many other instances
// Object.create()  //constructor methid

 //object literals
const mySym = Symbol("newkey")

 const obj = {
    name : "Manish",
    "full name":"manish kumar",
    [mySym] : "newvalue", // way to create symbols in objects
    age : 18,
    location : "vadodara",
    isLogin : true
 };


//  console.log(obj.name);  //not a good way to access elemetns of objets
//  console.log(obj["full name"]);  //here dot method fails therfore we use square breacker method
//  console.log(obj["name"]); 
//  console.log(typeof obj[mySym]); 

// obj.age = 19
// console.log(obj.age); //we can change the value of age by this method
// Object.freeze(obj); //if we want that no one should be able to change the values of the object
// //it dont give any error but it also dont get applied to the object
// obj.age = 20
// console.log(obj.age);
// console.log(obj);

obj.greeting = function(){
    console.log("greeting")
}
obj.greeting2 = function(){
    console.log(`greeting ${this.name}`)
}
console.log(obj);
console.log(obj.greeting);  //returns the refrence of function not the actual function
console.log(obj.greeting());
console.log(obj.greeting2());