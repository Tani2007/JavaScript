//Array in an object that represent a collection Similar type of element.
/*
//example -- 
indexof Array --   0        1         2
const person = ["Radhe","Krishna","Seeta",
"Geeta","Shayaam"]
   3        4

console.log(person[0])//Radhe 
console.log(person[1])//Krishna

//To gt the last element of the array 
console.log(person.at(-1))
*/
/*
//Now lets check the type ofan array 
let arr = []
console.log(typeof arr)//it'll give you type as an object.
*/
/*
//To create an array
//Method 1 
let fruits = new Array("apple","banana","orange")
console.log(fruits)//It will give you an array. 

//Method 2
let fruits = [ 'apple', 'banana', 'orange' ]
console.log(fruits)

//You can change the value of array by using this --
let fruits = [ 'apple', 'banana', 'orange' ]
fruits[2] = "mango"
console.log(fruits[2])//now it will give 2n index element as "mango" not "orange"
*/
/*
//for of loop
let fruits = [ 'apple', 'banana', 'orange' ]
for (const i of fruits) {
   console.log(i)
}

for (const i in fruits) {//Here (in) stands for index 
   console.log(i)//this'll give the index 
   console.log(fruits[i])//this will give you all the values
}
*/
/*
//for each loop
//Syntax -- 
//Traditional method 
Array.forEach(function
   callback(currentValue , index ,array){
      //Your logic here 
},thisValue)
here index,array,thisValue are optional

//for each using arrow fucntion
array.forEach((currentValue, index, array)=>{
   //Your logic here
   },thisValue)

//here index,array,thisValue are optional

//Map Method

//Traditional method
Array.map(function
   callback(currentValue , index ,array){
      //Your logic here 
},thisValue)

//map using arrow fucntion
array.map((currentValue, index, array)=>{
   //Your logic here
   },thisValue)

*/
/*
//example
let fruits = [ 'apple', 'banana', 'orange' ]
fruits.forEach((currentElem,index,arr)=>{
   console.log(`${currentElem} ${index}`)
   console.log(arr)//array ko 3 baar show kar dega 
})
//ye jo arrow se pehle bracket lagaya tha wahi to callback function hota hai 

let fruits = [ 'apple', 'banana', 'orange' ]
fruits.map((currentElem,index,arr)=>{
   console.log(`${currentElem} ${index}`)
})
*/
/*
//vaise to yeh dono function ek hi kaam karte hai par ek bahut chhota sa difference hota hai ki forEach me aap return keyword ka use nhi kar sakte ho par map map me kar sakte ho
//for each se aapko data show hi karna padega par map ki madad se aap usi array se k naya array bana sakte ho jaise
let fruits = [ 'apple', 'banana', 'orange' ]
let newFruitArr = fruits.map((currentElem,index,arr)=>{
   return `myy av fruit is ${currentElem}`
})
console.log(newFruitArr)//wk nyi array dega yeh aapko
*/
/*
//Question = 1 -- write the program to multiply each element of array with 2 using for each
let constnum = [1,2,3,4,5]
constnum.forEach((currElem)=>{
   console.log(currElem*2)
})
//Same using map function
let numbers = cons  tnum.map((element)=>{
   return element*2;
})
console.log(numbers)
*/

/*Methods of Array 
//To add and remove an element

1-push()=add one or more element at the end of an array.
2-pop()=remove last element from an array 
3-unshift()=add one or more elements at begging of an array 
4-shift()=metjod that remove first elemen of an array 

let fruits = [ 'apple', 'banana', 'orange' ]
fruits.push("banana","pineapple")
fruits.pop()
fruits.unshift("pineapple","grapes")
fruits.shift()
console.log(fruits)
*/
/*
//To add something in between we use splice
//syntax
//splice(start,deleteCount,item1,item2,...,itemN)
let fruits = [ 'apple', 'banana', 'orange',"guava" ]
console.log(fruits.splice())//this will give empty set of array 
console.log(fruits.splice(1))//ye 1 index se lekar end tak ka data dedega
fruits.splice(1,1)//1 index se hi start karo or 1 ko hi delete kar dega
console.log(fruits)
//now i want to delete banan and add pineapple then
fruits.splice(1,1,"pineapple")
console.log(fruits)
//agar aapko kuch bhi delete na ho to phit
fruits.splice(1,0,"mango")
console.log(fruits)
*/
/*
//For Search we have = indexOf,lastIndexOf & includes
const number = [1,2,3,4,5,6,7,8,9]
//to use indexOf 
//syntax
//indexOf(searchElement, fromIndex)

const number = [1,2,3,4,3,6,5,6,7,8,9]
console.log(number.indexOf(4));//give you the output 3
//but if you want to search the index of 4 from 5th index
console.log(number.indexOf(4,5));//return you the output -1 as it can not find the value 4 after 5th index
*/
/*
//to use lastIndexOf
const number = [1,2,3,4,6,5,6,7,8,9,4]
console.log(number.lastIndexOf(6));//give you 6 as the last index of 6 is 6
//while indexOf will give you the first occurence index of 6 that is 4
console.log(number.lastIndexOf(3))//return 2 as index of 3 is 2
//if you want to serch it from some another index use this 
console.log(number.lastIndexOf(4,8))//here it won't give you -1 it will rather give you 1 as the index of 4 is 3 ,since it starts searching form backward no matter weather 4 is present after 8 or not.
*/
/*
//incluse method = one of the most important
//syntax
//includes(searchElement)
//includes(searchElement, fromIndex)
const number = [1,2,3,4,6,5,6,7,8,9,4]
console.log(number.includes(4))//it'll giveyou true if it includes or else false
*/
/*
//Filter Method
//syntax same as map
Array.find(function
   callback(currentValue , index ,array){
      //Your logic here 
},thisValue)

const number = [1,2,3,4,6,5,6,7,8,9,4]
const result = number.find((currElem) => {
   return currElem > 5;//ye wahi forEach or map wala kaam karega currElem ek ek element ko lekar aega aur check karega that is it greter than 5 or not and give the firt value greter than 5 ,if not found give undefined.
})
console.log(result)//sirf pehla element 5 se bada dega
*/
/*
//findIndex method
const number = [1,2,3,4,6,5,6,7,8,9,4]
const result = number.findIndex((crrElem) => {
   return crrElem > 6;
})//it will give you the index of the first element greter than 6
console.log(result)
*/
/*
//filter method
const number = [1,2,3,4,6,5,6,7,8,9,4]
const result = number.filter((crrElem) => {
   return crrElem > 6;
})
console.log(result)//ye saare element 6 se bade return kar dega
*/
/*
//Question = 1 select the product less that 500 and resturn the array of them
const products = [
   { name:"Laptop", price:1200},
   { name:"Phone", price:800},
   { name:"Tablet", price:300},
   { name:"Smartwatch", price:150}
];
let selection = products.filter((currElem,index) => {
   return currElem.price<500;//jab bhi aap object ke saaath khelte ho to aapko aapko uske properties laane ke liye dot(.) ka use karna padta hai.
})
console.log(selection)
*/
/*
//Filter Unique values
const numbers = [1,2,3,4,5,6,7,6,8,9];
let uniqueValues = numbers.filter((currElem,index, arr) => {
   //console.log(index)//saare index aa jayenge jo match nhi kiya wohi repeated hai 
   //console.log(numbers.indexOf(currElem))//jaha jaha 6 hoga waha waha pehle wale 6 ka index aa jayega jo ki 5 hai 
   return numbers.indexOf(currElem) === index
})
console.log(uniqueValues)

//isi kaam ko karne ka dusra tareeka hai new set method 
const numbers = [1,2,4,3,4,5,6,7,6,8,9];
console.log([new Set(numbers)]);//This will give you all the unique value
*/
/*
//How to Sort and Compare an array 
//array.sort()
const fruits = ["Banana","Apple","orage","Pineapple"]
console.log(fruits.sort())
//But sometime it won't sort numbers properly for that we use conmpare method and we use compare  method froe decending order as well

//Compare  Method
//syntax
const compareMethod = arr.sort((a,b) => a-b);
if(a>b) return 1 => switch the order
if(b>a) return -1 => keep the order

const numbers = [7,5,8,9,6,4,2,3,1];
const sortedNumbers = numbers.sort((a,b) => {
   if(a>b) return 1;
   if(b>a) return -1;
})
console.log(sortedNumbers)//aceding order me sort kar diya 

//if you want decending order just hange the oredr
const numbers = [7,5,8,9,6,4,2,3,1];
const sortedNumbers = numbers.sort((a,b) => {
   if(a>b) return -1;
   if(b>a) return 1;
})
console.log(sortedNumbers)//decending order 
*/
/*
//we have used toUpperCase and toLowerCase many time so i don't ned to write them
//use can also use capitalise bla bla bla..
*/
/*
//Question = 1 using map method crete an array were each even number is capitalised

let numbers = [5,4,2,1,6,4,8,9]
let evenSquare = numbers.map((crrElem) => {
   if(crrElem%2==0) return crrElem*crrElem;
})
console.log(evenSquare)//isme undefined aega aur even ka square aega 
let result = evenSquare.filter((currElem) => {
   currElem != undefined;
   return currElem;
})
console.log(result)//Ab undefined nhi aega
*/
/*
//Reduce Method //jab bhi aapke paas multiple products ho aur data aapko single unit me chahie to reduce ka use karo 
//jab aap ecomerse website me apna ttal nikaalte ho tab aapko reduce ka use karna padta hai 
//syntax is same as map bsa currElem se pehle accumlator aa jata hai 
let result = array.reduce((accumulator,currElem,index,arr) => {
   //Your logic here 
   //Returnn the updated accumulated value
},inetial value)
*/
//write a program to calculate the total price using reduce
const productPrice = [700,800,400,600,200]
let result = productPrice.reduce((accum,currElem) => {
   return currElem + accum
},0)//her ewe have give inetial value = 0 ye wahi hai jab ham sum karte the to ek variable ko inetially 0 set karna padta tha
console.log(result)