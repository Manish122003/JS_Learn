const { response } = require("express");

const promiseOne = new Promise(function(resolve,reject){
    //Do async task
    //DB calls, cryptography, newtwork
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consume');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Another async task completed'); 
        resolve()
    },1000)
}).then(function(){
    console.log('Another promise consume');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        
        resolve({username: "Manish",email : "manish@gmail"})
        },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username:"man",pass:"123"})
        }else{
            reject(`Error `)
        }

    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then(function(uname){
    console.log(uname);
}).catch(function(err){
    console.log(err)
}).finally(function(){
    console.log('Finally block executed');
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"js",pass:"123"})
        }else{
            reject(`Error in 5`)
        }

    },1000)
})
//async and wait dont resolve error as then and catch
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log((response));
    }catch(err){
        console.log(err);
    }
}

consumePromiseFive()

// async function getAllUser(){
//     try{
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data);
//     }catch(err){
//         console.log("err",err);
//     }
// }
// getAllUser()


//fetch return promise
//if a promise gets 404 error then it is taken as response not reject
//fetch promise only rejects when network error is encountered
fetch('https://randomuser.me/api/')
.then((response,reject)=>{
    return response.json()
})
.then((resp)=>{console.log(resp);})
.catch((err)=>{console.log(err);})

