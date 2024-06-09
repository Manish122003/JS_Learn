// //Dates

// let newDate = new Date()
// console.log(newDate); //type is Object
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toISOString());
// console.log(newDate.toTimeString());

// console.log(typeof newDate);

// // let myDate = new Date(2023,0,23);
// let myDate = new Date("2023-01-14");
// console.log(myDate);
// console.log(myDate.toDateString());

// let myDate = new Date("2023-01-14");
// let timestamp = Date.now();
// console.log(timestamp);
// console.log(myDate.getTime());


// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
// console.log(newDate.getTime());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getHours());


console.log(newDate.toLocaleString('default',{
    weekday : "long"
}))