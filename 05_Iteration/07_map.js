const nums = [1,2,3,4,5,6,7,8,9,10]

// const new_num = nums.map( (i)=>{
//     return i+10
// })

//filter will return only true values

//chaning
const new_num = nums.map( (i)=> i*10 ).map( (j)=> j+10).filter( (k)=> k > 40)
console.log(new_num)