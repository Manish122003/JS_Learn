const email = ""
if (email){
    console.log("got email");
}else{
    console.log("No email found");
}


// const email1 = []
// if (email1){
//     console.log("got email");
// }else{
//     console.log("No email found");
// }

//empty string is taken as true value "" == false
//empty array is taken as false value [] == true
//falsy value => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy value => "0", "false", " ", [], {}, function(){}

// const emptyObj = {}
// if (Object.keys(emptyObj).length ===0){
//     console.log("empty object");
// }

// false == 0  => true
// false == ''  => true
// 0 == ''  => true