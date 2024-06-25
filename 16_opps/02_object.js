function mul5(num){
    return num*5;

}
mul5.power = 2
console.log(mul5(5)); // 25
console.log(mul5.power); // 2
// console.log(mul5()); // NaN
console.log(mul5.prototype);

function createUser (uname, score){
    this.uname = uname,
    this.score = score
}

//create a prototype function

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`${this.uname} ${this.score}`);
}

const user1 = new createUser("Name",25)
const user2 =  createUser("Tea",50)  //this will give error as we are not using the new keyword
//new keyword also assign the prototype to the fun call

user1.printMe()

/*
Here's what happend behinf the scene when the new keyword is used:

A new object is created : the new keyword initiate the creation of a new javascript object

A protoype is linked : The newly created object gets linked to the prototype property of the constructor function.This means that it has access to the properties and methods defined on the constructors's prototype.

The constructor is called : the constructor function  is called with the specified argumrnts and this is bound to the newly created object. If no explicit return value is specified for the construtor , js assumes this, the newly created object , to be the intended return value\

The new object is returned: After the construtor function has been called , if it doesn't return a non-prmitive value (object, array, function , etc), the newly created object is returned.
*/