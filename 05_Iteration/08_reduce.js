const nums = [1,2,3]

const total = nums.reduce(function (acc , curr){
    console.log(`acc : ${acc} and curr ${curr}`)
    return acc+curr
},0);


const total2 = nums.reduce( (acc,curr) => (acc+curr),0)
console.log(total)
console.log(total2)