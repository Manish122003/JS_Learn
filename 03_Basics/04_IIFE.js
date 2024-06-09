//Immediately Invoked Function Expression

(function books(){   //also know as named iffe as normal function with name is used
    console.log("Books")
})();

//used to call function immideately after its execution without globar scope pollution the rest of environment
//used to run code without polluting the global scope
// dont forgot to add ; at the end because iffe dont know where to end

( ()=>{  //also called as unnamed iffe as it uses arrow function without name
    console.log("name");
})();

// take last () as function call we can pass argumants using that
( (name)=>{
    console.log(`${name} printed`);
})('name');