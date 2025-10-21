const newElement=document.createElement("h2")
newElement.innerText="This is a new element"
const element = document.getElementById("second")
// element.after(newElement)
element.before(newElement)
element.replaceWith(newElement)
element.remove()
console.log(element)
// classList
const box=document.getElementById("box")
// box.classList.add("box1","box2")
// box.classList.remove("box1")
// box.classList.toggle("box1")
console.log(box.classList.contains("box2"))