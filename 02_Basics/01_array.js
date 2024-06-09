// const myArray = [1,2,3,4,5,true,"hello"]; //gives shallow copy :- shares the same refrence point    
//                                                 //Deep copies :- donot share the same refrence point      
const myArr = new Array(1,2,3,4,5);
// console.log(myArr);

//Array methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();  //removes the last value from array

// myArr.unshift(9); //adds item to begning
// myArr.shift(); //remove the item from begning
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof myArr);  //object
// console.log(newArr);
// console.log(typeof newArr);  //string

//slice and splice

console.log("A ", myArr);  //A  [ 1, 2, 3, 4, 5 ]
const my1 = myArr.slice(1,3); //only access the copy no changes with refrence  

console.log(my1);  //[ 2, 3 ]
console.log("b ", myArr);   //b  [ 1, 2, 3, 4, 5 ]

const my2 = myArr.splice(1,3);//removes these elements from refrence 

console.log(my2);  //[ 2, 3, 4 ]
console.log("C ", myArr);  //C  [ 1, 5 ]