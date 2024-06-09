number = 2;
switch (number) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;

    default:
        console.log("0");
        break;
}

//Nullish Coalescing Operator (??) :null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
// console.log(val1);


// Ternary Operator
//condition ? true : false

const price = 100;
price > 80 ? console.log("greater") : console.log("smaller");;

