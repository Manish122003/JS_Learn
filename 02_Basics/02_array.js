// const marvelHeroes = ["Ironman","Thor","Spiderman"]
// const dcHeroes = ["Flash","Superman","Batman"]

// // marvelHeroes.push(dcHeroes);
// // console.log(marvelHeroes);
// // console.log(marvelHeroes[3][1]);

// marvelHeroes.concat(dcHeroes);  //doesnot changes the origginal array
// console.log(marvelHeroes);
// console.log(marvelHeroes.concat(dcHeroes));  //combines two arrays alost concat uses new array

// const allNew = [...marvelHeroes,...dcHeroes];  //spread all the elements and store it in new array
// console.log(allNew);

// const new_Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const realArr = new_Arr.flat(Infinity) //return all the sub arrarys concatinated to the main original array
// console.log(realArr);

// console.log(Array.isArray("manish"));
// console.log(Array.from("manish"));  //converts the array of given string
// console.log(Array.from({name : "Manish"}));  //gets confuse that make array of key or value

//inserting in array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));  //of adds the elemetns to array