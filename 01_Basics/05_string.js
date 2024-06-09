const hello = "hello";
console.log(`output is ${hello}`);

const gameName = new String('new-game');
console.log(`output is ${gameName}`);
console.log(gameName[0]);
//these methods dont change the value of original string 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('n'));

const newName = gameName.substring(-7,4);
console.log(newName);
//we cannot give negative values in subString if we give also it will take it as 0 


//but to overcome this issue we use slice
const anotherName = gameName.slice(-7,4);
console.log(anotherName);

//trim white space at start and end  it does not work on new line characters or escape characters
const stringOne = "   manish ";
console.log(stringOne);
console.log(stringOne.trim());
console.log(stringOne.trimStart());
console.log(stringOne.trimEnd());

const stringTwo = "manish@20parul@30";
console.log(stringTwo);
console.log(stringTwo.replace("@20","@1212"));
console.log(stringTwo);
console.log(stringTwo.includes("@20"));
console.log((stringTwo.split('@')));
let x=stringTwo.split('@');
console.log(x);
