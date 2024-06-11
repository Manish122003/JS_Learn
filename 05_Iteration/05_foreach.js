const lang = ['python','c','java','c++']

//using arrow function
lang.forEach((i)=>{
    // console.log(i);
})

//using normal function
lang.forEach(function fun(i){
    // console.log(i);
})

//using refrence of function
function fun2(i){
    // console.log(i);
}
lang.forEach(fun2)

lang.forEach((i,index,arr)=>{
    // console.log(i,index,arr);

})

z=[
    {
        name:"python",
        use:"coding"
    },
    {
        name:"c",
        use:"coding"
    },
    {
        name:"java",
        use:"coding"
    },
    {
        name:"go",
        use:"coding"
    },
    {
        name:"ruby",
        use:"coding"
    }
]

z.forEach((i)=>{
console.log(i);
})