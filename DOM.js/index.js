//Jab aapko browser ke saath kehlna hai tab BOM browser object model use hota hai 
//Par jab aapko document se khelna hai jaise body text tab aapko DOM use karna hai Document Object Model

//Jab bhi aap Element ko target karte ho tab aapko HTML collection milta hai aur jab aap nodes ko target karte ho tab aapko node list milta hai 
/*
//Aapko pura code HTML mil sakta hai document ki madad se 
let parent = document 
console.log(parent)//isse pura html document mil raha hai 

console.log(document.head)//head ka pura data aa jayega

console.log(document.body)//isse body ka pura data aa jayega
*/
/*
Ab jitne difference aaenge wo sab same honge 
pehle dusre wale ki tarah 

//ChildNode/children
//ChildNodes
let bodyChild = document.body.childNodes;//isme text nodes bhi include hongi
console.log(bodyChild)
//children
let bodyChidren = document.body.children;//isme saari text node gaayab ho jayengi 
console.log(bodyChidren)
*/
/*
//firstChild/firstElementChild 
//firstChilid = ye apako child node me se pehla node dedega 
//firstElementChild = par ey aapko children me se pehla node dega 
console.log(document.body.firstElementChild)
console.log(document.body.firstChild)
*/
/*
//lastChild/lastElementChild
//lastChild = ye aapko childNode me se last node dega
//lastElementChild  = ye aapko children me se last element dega 
console.log(document.body.lastChild) 
console.log(document.body.lastElementChild) 
*/
/*
//nextSibling/nextElementSibling
console.log(document.body.firstElementChild.nextElementSibling)//hr tag aa jayega kyuki wo hi h1 ke baad hai elements me
//agar aap nextSibling use karoge wo aapko text bhi de saka hai kyuki wo childnode par kaam karta hai aur ye children par 
*/
/*
//previousSibling/previousElementSibling
let secondElement = document.body.firstElementChild.nextElementSibling
console.log(secondElement.previousElementSibling)//hr se pehle wala sibling jo ki h1 tag hai wo aa jayega 
//agar aap previousSibling use karoge wo aapko text bhi de saka hai kyuki wo childnode par kaam karta hai aur ye children par 


//To see parent node use this method 
let secondElement = document.body.firstElementChild.nextElementSibling
console.log(secondElement.parentNode)//hr kaa bhi to parent node hbi body hi hoga 
console.log(secondElement.parentElement)//ye bhi aaopko body hi dega as a oarent element
*/
/*
//Searching by using DOM

//search using id =getElementById
let firstElementById = document.getElementById("Heading")
console.log(firstElementById)
//agar aapko uske andar ka data chahiye toh aap innerHTML, innerText, textContent ka bhi use kar sakte ho 
console.log(firstElementById.innerHTML)//DOM API likha aa jayega kyuki wahi uske andar likha hai 
console.log(firstElementById.innerText)//DOM API likha aa jayega kyuki wahi uske andar likha hai 
console.log(firstElementById.textContent)//DOM API likha aa jayega kyuki wahi uske andar likha hai 
*/
/*
//Searching using class name = getElementsByClassName 
let className = document.getElementsByClassName("listofnodes")
console.log(className)//yaha se ek HTML collection aega jo bahaut kaaam ka nhi hoga par agar iske aage teen dot laga diye jaye to kaam ka ban jayega
console.log(...className)//ab HTML collection nhi ab class list aa jayegi jo jyada useful hai 

//same kaam aap aise bhi kara sakte ho 
//isko aap iterate bhi kara sakte ho using for of loop 

for(let iterator of className){
    console.log(iterator)//jo kaam aapne teen dot laga kar kiya tha wahi kaaam yahan se ho gaya
}

//jab bhi ham class name use karenge tab hame yato teen dot ka use karna padega ya phir loop chalana padega data ko get karne ke liye 

for(let iterator of className){
    console.log(iterator.innerHTML)//isme text ke saath saath saare tag bhi aa jayenge ul ke andar jitna bhi html hai wo sab iske andar aa jayega 
    console.log(iterator.innerText)//isme saara text aa jayega HTML tag ke andar ka par maine 5th node hide kar rakha hai to wo nhi aaega
    console.log(iterator.textContent)//isme 5th node bhi aa jayega joki aapne style dekar hide kar rakha hai 
}
//inner text wahi text dikhata hai jo browser me likha hota hai 
*/
/*
//To Search by uing Tag name = getElementByTagName

let tagName = document.getElementsByTagName("li")
console.log(tagName)//saare li tag get kar liye array ki form me 

//ab isme for of loop chala kar saare li tag lelo
for(let ele of tagName){
    console.log(ele)
}
*/
/*
//By using querySelector isse aap id bi select kar sakte ho aur class bhi 

let querySelector = document.querySelector("#Heading")
console.log(querySelector)
console.log(querySelector.innerText)//iske andar ka text dekh sakte ho 
//text change bhi kar sakte ho 
console.log(querySelector.innerText = "Tanishq")//text change bhi ho jayega
*/
/*
//ab jaise aapko li chahiye using query selecor par aapko saare li chahiye to use kare querySelectorAll
let queryAll = document.querySelectorAll("li")
console.log(queryAll)
//ab isme aak loop bhi laga sakte ho 
queryAll.forEach((currElem) => {
    console.log(currElem)
})
*/





