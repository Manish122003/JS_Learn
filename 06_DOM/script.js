x = document.getElementById("newid");
x.style.backgroundcolor = 'green'
console.log(x)
console.log(x.id)
console.log(x.className)
console.log(x.getAttribute('id'))
console.log(x.getAttribute('class'))
x.setAttribute('class','nayaa')
console.log(x.getAttribute('class'))

x.style.backgroundColor = "blue"       //to change the style from js
x.style.height = "15vh" ;
x.style.borderRadius = "15px"

console.log(x.textContent)  //to read the content by name or class or id #it gives all the content even the hidden one
console.log(x.innerHTML)  //to read the content by name or class or id  #gives all the subtags and their properties
console.log(x.innerText)  //to read the content by name or class or id  #Dont gives the hidden content


//Querry selector
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByName()
// document.querySelector()   //ives only the  first occurance 
// document.querySelectorAll()  //gives all the occurances || directly writes the tag name || . for calss name || # for id  

z= document.querySelector('input[type="password"]')
console.log(z)


// const name5 =document.querySelectorAll("li")
// name5.forEach(function (l) {
//     l.style.backgroundColor = "green"
// })

const za = document.getElementsByClassName("li_items") //retturns HTML collections which is different form node list
//but HTML collection has no properties like foreach or for so we need to convert it to array
//method or function used to convert HTML collection to Array is Array.from(HTML_Collection_name)