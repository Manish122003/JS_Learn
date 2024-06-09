let score = null
console.log(typeof score);
score = Number(score);
console.log(typeof score);
console.log(score);

//type conversion of different types to Number()
// "33" => 33
// "33a" => NaN
// null => 0
// true => 1
// faluse => 0
// undefined => NaN

// let login = "" //false
// let login = "asd" //True
login = Boolean(login)
console.log(login)

// "" => false
// "asd" => true
// 1 => true 0 => false
