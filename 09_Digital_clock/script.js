const clock = document.getElementById("clock");


setInterval(function(){
    let date = new Date()
    console.log(date.toTimeString());
    clock.innerText = date.toLocaleTimeString()
},1000);  //ek method dedo aur interval bta do us interval pe run karte rhega