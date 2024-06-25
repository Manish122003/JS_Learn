class User{
    //new keyword use me lete hi constructor apne aap call ho jyega
    constructor(uname,email,pswd){
        this.uname = uname;
        this.email = email;
        this.pswd = pswd;
    }

    encryptPassword(){
        return `${this.pswd}abc`
    }

    userchange(){
        return `${this.uname.toUpperCase()}`
    }
}

const use = new User("man","mail",'12');
console.log(use.encryptPassword());
console.log(use.userchange());

//behind the scene

function User1(uname,email,pswd){
    this.uname = uname;
    this.email = email;
    this.pswd = pswd;
}

User1.prototype.encryptPassword = function(){
    return `${this.pswd}abc`
}
User1.prototype.userchange = function(){
    return `${this.uname.toUpperCase()}`
}

const Tea = new User1("tea","tmail",'12t');
console.log(Tea.encryptPassword());
console.log(Tea.userchange());