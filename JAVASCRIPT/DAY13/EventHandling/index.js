// function handleClick() {
//     const element= document.getElementById("first");
//     element.textContent="You have clicked me!";
// }


// const element= document.getElementById("first");
// element.onclick= function handleClick() {
//     element.textContent="You have clicked me!";
// }

// element.onclick= function handleClickAgain() {
//     element.textContent="You have clicked me again!";
// }


// this is a good practice to use addEventListener instead of onclick property
// const element= document.getElementById("first");
// element.addEventListener("click", function handleClick() {
//     element.textContent="You have clicked me!";
// });
// element.addEventListener("click", function handleClickAgain() {
//     element.style.backgroundColor="red";
// });

// const child1=document.getElementById("child1");
// child1.addEventListener("click", ()=>{
//     child1.textContent="Child 1 clicked";
// })

// const child2=document.getElementById("child2");
// child2.addEventListener("click", (event)=>{
//     child2.textContent="Child 2 clicked";
// })

// const parent=document.getElementById("Parent");
// for(let child of parent.children){
//     child.addEventListener("click", ()=>{
//         child.textContent="I am clicked";
//     });
// }



// bubbling concept

const grandparent= document.getElementById("grandparent");
grandparent.addEventListener('click',()=>{
    console.log("grandparent clicked");
    
})

const parent = document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("parent clicked");
    
})

const child= document.getElementById("child");
child.addEventListener('click',()=>{
    console.log("child clicked");
    
})