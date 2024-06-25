class User{
    constructor(uname){
        this.uname = uname;
    }
    logMe(){
        console.log(`${this.uname}`);
    }

    static createId(){  //statics stops the access of this functions by instance
        return '12'
    }
}

const newUser = new User("manish")
newUser.logMe() // prints "manish"
// console.log(newUser.createId()) // prints "12"  //will give error as we used static keyword in this function defination

class Teacher extends User{
    constructor(uname, subject){
        super(uname)
        this.subject = subject
        }
}

const sub = new Teacher("mukesh","math")
sub.logMe()
// console.log(sub.createId())  // this will also give error if parent is not able to access with static then how child will access