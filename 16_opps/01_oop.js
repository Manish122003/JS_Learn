const user = {
    uname : "Manish",
    login : "8",
    signin : true,
    getUser : function(){
        // console.log(`hello ${this.uname}`);
        console.log(this); //current context like current scope
    }
}

console.log(user.uname)
console.log(user.getUser())
console.log(this);
//object literal is literally and object

// to make same object with differnet data we need to create the object again and again so the term constructor is intruced 

// const promiseOne =  new Promise()  //new is used to create new context
// const Date = new Date

function user1(uname, loginCount,isLogin){
    this.uname = uname;
    this.loginCount = loginCount;
    this.isLogin = isLogin;

    // return this  // this is implicitely defined by the sytstem we give it or not it will be there 

}
const uOne =  user1("man","2",true);  //new gives copy of the original and we do out task with that copy or new instance
const uTwo =  user1("hello","5",false); //but if we dont use new keyword so all the changes are made at the original data
const TOne = new user1("man","2",true);  
console.log(uOne);
console.log(uTwo);
console.log("new line 1");
console.log(TOne.constructor);

//mechanism of new keyword
//when we use new keyword an empty objet is created called instance
//constructor function is called when we use new keyword
//arguments are injected to the instance
//the values are returned

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;  
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
//   // Expected output: true
  
//   console.log(auto instanceof Object);
//   // Expected output: true
  