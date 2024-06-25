class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`user name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pswd){
        super(username)  //behind the scene it uses this and send the refrence of current context to parent assign value aur return context to current contexxt
        this.email = email
        this.pswd = pswd

    }

    addVourse(){
        console.log(`new course by ${this.username}`);
    }
}

const naya = new Teacher("teac1","teach@mail","12354")
naya.addVourse()
const hello = new User("hello","hello@mail",'1234')
hello.logMe()

console.log((naya instanceof Teacher));
console.log((naya instanceof User));