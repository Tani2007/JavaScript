//Events in JavaScript
//3 steps to add events in JS

//1st = step add mouse event directly in HTML - inline adding 

//2nd Method usng DOM
//document.getElementById("myBtn").onclick = () => { "alert('you dared to comme here')"}
/*

//3rd using Add Event listener
let myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", () => {
    alert("Hey JS")
})

//traditional method 
let myBtn = document.getElementById("myBtn")
myBtn.addEventListener("click", funciton (){
    alert("Hey JS");
});
*/
/*
//Mouse Event 
let mouse = document.querySelector(".square")
mouse.addEventListener("click",() => {
    mouse.style.backgroundColor = "black"
})


//click ki tarah dbl click bhi hota hai aur baaki mouse Events bhi hote hai

//Adding a class list
//To add a class square in div 2 use this classList.add("class name")

let second = document.querySelector(".second")
console.log(second)
second.addEventListener("click",() => {
    second.classList.add("square")
})
*/