function setUname(uname){
    this.uname = uname;
    console.log(`uname ${uname}`);
}

function createUser(uname,email,phone){
    setUname.call(this, uname);   //if we dont use call here then its just declaration not the call for given function even though we use ()
    //we are using this here as paramater to pass the context of current to the function call so as to store the data even after the stack of cun call gets clear
    this.email = email;
    this.phone = phone;
}

const naya = new createUser("man","mail.com",'12')
console.log(naya);