// let a = 5;
// const b = 4;
// {var c = 7;}  //var has  a global scope
// console.log(a);
// console.log(b);
// console.log(c);

// let a =50
// const b = 20
// if (true){
//     let a = 5;
//     const b = 4;
//     console.log('inner ',a );
//     console.log('inner ',b );
// }
// console.log("outer",a)
// console.log("outer",b)

function one(){
    const uname = "Manish"

    function two(){
        const tutor =  "youtube"
        console.log(uname)
    }
    // console.log(tutor);  //not defined as it is out of the scope
    two()
}

// one()

addTwo(5);   //gives error as the function is stored inside a variable so it cannot be directly accessed
const addTwo = function(num){
    return num+1
}