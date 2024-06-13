const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children); //gives the HTML collection of all child elements
console.log(parent.children[0].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color="red";
parent.children[1].style.backgroundColor="blue";

console.log(parent.firstElementChild);  //get the first child of parent element
console.log(parent.lastElementChild);  //get the last child of the selected parent element


const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement); //to get the parent of the current delected element
console.log(dayOne.nextElementSibling); //to get the next element of the same level


console.log("Nodes :", parent.childNodes); //counts the child as well as the line break
//HTML counts only one space or line break by default
//comment is also taken as an element by the HTML
