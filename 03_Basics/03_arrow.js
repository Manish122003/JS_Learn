const user = {
    uname : "JS",
    price : 5000,
    
    welcomeMsg : function(){
        console.log(`${this.uname},welcome`);
        console.log(this)
    }
}
// user.welcomeMsg()
// user.uname= "hello"
// user.welcomeMsg()

// console.log(this) //value on console is {} and value on browser is window object

function hello (){
    uname = "hello"
    console.log(this.hello);
}
hello()

//we can use this in object not in function

// const hello2 = function(){
//     let username = "print";
//     console.log(this.username);  //here this is undeffined because this is only used in object not function
// }


const hello2 = () => {
    let username = "print";
    console.log(this.username)
}
// hello2()

const add = (num1 , num2) => {
    return num1+num2
}

//same function can be written in different way only for single line operations
const add2 = (num1, num2) => num1+num2
//if we write arrow function in { } so we need to return but for same code if we use ( ) then we dont need to return it manually it sodes automatically
const add3 = (num1, num2) => (num1+num2)  // ( ) uses implicit return sytem return the value by itself
const add4 = (num1, num2) => {return num1+num2}  // { } usesexplicit return is done maually
console.log(add(2,3));
console.log(add2(2,3));
console.log(add3(2,3));
console.log(add4(2,3));

const add5 = (num1, num2) => ({key1 : "value"})  //to return object we must need to use ( )
