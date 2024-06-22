//generate random color
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let interId;

const startChange = function(){
    if (!interId){
        interId = setInterval(changeBg,2000);
    }

    function changeBg(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChange = function(){
    console.log("stop");
    clearInterval(interId);
    console.log("stop");
    interId = null;
};
document.querySelector("#start").addEventListener('click',startChange);

document.querySelector("#stop").addEventListener('click',stopChange);