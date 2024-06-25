let myName = "Manish     "

console.log(myName.trim().length);
// console.log(myName.truelength); //create this

let myHero = ['thor','spiderman']

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}
//factory function

// to add any function to prototype we can directly add it to object prototype so it will be accessable to everything
// array ==> object ==>null
// string ==> object ==>null
// function ==> object ==>null

Object.prototype.lol = function(){
    console.log(`hello lol`)
}

Array.prototype.hellolol = function(){
    console.log(`hello lol aray`);
}

heroPower.lol()
myHero.hellolol()
// heroPowerero.hellolol()


//Inheritance

const user = {
    name : "man",
    mail : "google,com"
}
const Teacher = {
    makeVide: true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'js assignmant',
    fulltime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user
console.log(Teacher.name);
console.log(user.makeVide);
console.log(TAsupport.isAvailable);

//above is old syntax

//mordern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUname = "Manish      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`length is ${this.length}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUname.trueLength()