const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");  //returns node list 
buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor = e.target.id
        
    })
})
