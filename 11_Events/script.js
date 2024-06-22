//method 1 is inline event listner

//method2
// document.getElementById('owl').onclick = function () {
//     alert("owl")
// }

//method3
// document.getElementById('owl').addEventListener('click',function(e){
//     alert("owl");
//     e.stopPropagation()
// },false)// here we also have one third parameter called false but we generally dont use it as it is set bydefault
//that false or true is kmown as event propogation false is event bubbling and true is capturing
//bubbling is following the order of click like first child then parent which is by default
//capturing is in the order parent then child no matter the child is clicked

//method4 attachEvent()

//Event listner to study
//type  ,timestamp, defaultPrevented, target, toElement, srcElement, currentTarget,
//clientX, clientY, screenX, screenY
//altKey, ctrlKey, shiftKey, keyCode



// document.getElementById("images").addEventListener("click",function (e) {
//     console.log("clicked on the url");
//     e.stopPropagation()
//   },
//   false
// );
// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//     e.stopPropagation()
//   },
//   false
// );

// document.getElementById('google').addEventListener("click",function(e){
//     console.log("google clicked");
//     e.preventDefault()
// },false)



document.querySelector("#images").addEventListener('click',function(e){
    console.log("images clicked");
    console.log(e.target.parentNode);
    let rem = e.target.parentNode;
    //ways to remove chlid or element
    //rem.remove();  //method 1 directyly by element
    //rem.parentNode.removeChild(rem); //method 2 by parent
    //rem.outerHTML = ""; //method 3 by setting outerHTML
    //rem.style.display = "none"; //method 4 by setting display none

    let rem1 = e.target.tagName;
    console.log(rem1);
    if(rem1 === "IMG"){
        rem.remove();
        }

},false)