// function name () {
//     console.log("h");
//     console.log("e");
//     console.log("l");
// }
// // name();
// // name();

// function addTwo(no1,no2){  //parameters
//     console.log(no1+no2);
// }

// addTwo(); //NaN
// addTwo(2,3); //5
// addTwo(2,"3"); //23 as a string  //arguments

function oginUserMessage(uname = "abc"){
    if (uname===undefined){
        console.log("not");
        return
    }
    console.log(`${uname}just logged in`);
    return 
}

// const x = oginUserMessage ( " hitesh " );
// console.log(x);
// oginUserMessage ();  //undefiend as we dont pass any value

function calculatePrice(...num1){  //... is called rest and well as spread as per their use
    return num1;
}

// console.log(calculatePrice(2,3,4));  //return [2,3,4] as we used rest operator 


function calculatePrice(val1,val2,...num1){  //... is called rest and well as spread as per their use
    return num1;  //here val1 contain 2 val2 contain3 and ...num1 contain rest of all the elements
}

// console.log(calculatePrice(2,3,4,5,6,7));

//passing object as paramanter
const obj2  = {
    name : 'man',
    roll : 2
}
function myfun(obj2){
    console.log(`uname is ${obj2.name} and password is ${obj2.roll}`)
}
// console.log(myfun(obj2))

//passing array as paramater
const arr = [ 1,2,3,4,5]
function secFun(getArr){
    console.log(getArr[0])
}
// secFun(arr);

