const lang = ['python','c','java','c++']

lang.forEach((i)=>{
    // console.log(i)
})

// const values = lang.forEach((i)=>{  //for each dont return any value 
//     console.log(i)
//     return i
// })

// console.log(values)

const nums = [1,2,3,4,5,6,7,8,9,10]

//return values of array
let new_nums = nums.filter( (num)=> num>4 )
// console.log(new_nums)

//same thing using foreach loop
let new_nums2 = []
nums.forEach( (i) => {
    if (i > 4){
        new_nums2.push(i)
    }
})
// console.log(new_nums2)

