// const newApp = new Object();  //singleton boject
// const newApp2 = {};
// console.log(newApp);  //Non-singleton boject
// console.log(newApp2);

// newApp2.id = "123";
// newApp2.name = "Manish";
// console.log(newApp2);

const user = {
    email : "acd@gmail.com",
    fullName : {
        username : "hello",
        realname : "bye"
    }
}
// console.log(user);

const obj1= {1 : 'a',2 : 'b'};
const obj2= {3 : 'c',4 : 'd'};

// obj3 = {obj1,obj2}
// let obj3 = Object.assign({}, obj1, obj2)  //here obj1 and obj2 are getting stored in obj3
// let obj3 = {...obj1,...obj2}  //spread all the stuff in both objests and store them in a new object
// console.log(obj3);

const db_data = [
    {
        id : 1,
        name : "hello"
    },
    {
        id : 2,
        name : "hello2"
    },
    {
        id : 3,
        name : "hello3"
    }
]

console.log(db_data[1].name);  //access the data from array of objects

console.log(Object.keys(user));  //return type is array
console.log(Object.values(user));  //return type is array
console.log(Object.entries(user));  //return type is array array of key and array of value

console.log(user.hasOwnProperty('email1'));  //used to check is any property is there in the object or not
