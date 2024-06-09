//if
//  if (condition){

//  }
// const isUser = true;
// if (isUser){
//     console.log("Valid user");
// }

//single line scope
const balance = 999
// if (balance > 400) console.log("test"),console.log("two");  //but this is not recommended

// if (balance < 400) {
//     console.log("less than 500");   
// }else if(balance <750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1000");
// }

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard){
    console . log ("Allow to buy course");
}
