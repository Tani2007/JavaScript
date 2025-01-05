//ECMA script  2015-2023 updates

//Object prroperties - Mordern JavaScript
/*
//1st property 
//if you key and value of the object are the same then
//traditional way 
let name = "Tanishq Saxena"
let age = 17
let person = {name:name,age:age}

//using shorhand notation of object property
let name = "Tanishq Saxena"
let age = 17
let person = { name, age};
console.log(person)
*/
/*
//Destructuring Array = iski madad se aap array ki jitni bhi propertites hai ya object ki jitni bhi properties hai aap unhe ek distict variable me assign kar sakte ho simply by this we can extract data from an array and objects and assign them to variable 
//traditional method 
let numbers = [10,20,30]
let first = numbers[0]
console.log(first)//ye tha purana tareeka 

//nayaa tareeka
let numbers = [10,20,30]
let [first,second,third] = numbers 
console.log(first)
console.log(second)
console.log(third)

//ignoring the elements
let numbers = [10,20,30] 
let [,,third] = numbers
console.log(third)
*/
/*
//Question 1 = you need to swap two variable without using 3rd variable
let a = 10;
let b = 30;
[a, b] = [b, a]
console.log(a,b)
*/
/*
//Destructuring object
let user = {name:"Tanishq",age :17}
//ab agr appko name chahiye to aap kya karoge 
//traditional method
let myName = user.name
console.log(myName)
//Destructuring method 
let {name,age} = user
console.log(name,age)//par naam aapko yahan wahi use karrna padega jo object me likha hua hai 
*/
/*
//Renaming properties
let user = {name:"Tanishq",age :17}
//if you want to rename the key name from name to fullName then use this property
let {name:fullName,age} = user;
console.log(fullName)
*/
/*
//Spread Operator - Modern JavaScript

//to copy an aray 
let fruits = ["apple", "banana", "mango"]
let newFruits = [...fruits]
console.log(newFruits)//ho gya copy

//you can concatinate 2 arrays using this
let number1 = [1,2,3,4]
let number2 = [4,5,6]
let numbers = [...number1,...number2]
console.log(numbers)//ho gya concatinate aur 4  do baar aega
*/
/*
//Adding Elements to an existing array
let fruits = ["Apple","Orage","Mango","banana"]
//tradiotional methods are push and unshift
//fruits.push("pineApple","grapes")
//new method 
fruits.push(...["guava","grapes"])
console.log(fruits)
*/
/*
//It can  convert an string to an array of its individual characters 
//Traditional ways ae using split and  Array.from()
let str = "INDIA"
let arr = str.split("")
let arr1 = Array.from(str)
console.log(arr)
console.log(arr1)

//New method 
let str = "INDIA"
console.log([...str])
*/
/*
//Rest Parameter  - aap yahan kine bhi argument bhejjo wo get kar raha hoga as a parameter

let sum = (a,b,c,d) => {
    return a + b + c + d
}
console.log(sum(1,2,3,4))//ye jo aapne sum ke andar pass iye hai inhe aap parameter kahoge 
*/
/*
//issi tarreke ko by using rest parameter 
const sum = (...numbers) => {
    //ab ye jo numbers hai  yeh ek array hai aur aap ko iska sum karna hai jike liye aap reduce method ka use karenge 
    return numbers.reduce((accum, currValue, arr) => (accum = accum + currValue), 0)
}

console.log(sum(1,2,3,4))//ho gya sum
*/
/*
//exponential function 
//Math.pow() or **
//console.log(Math.pow(base,exponent))
console.log(Math.pow(2,3))
console.log(2**3)

//lets calculate the area of circle 
let area = Math.PI * 5**2;
console.log(area.toFixed(2))//Area nkal aega 2 decimal ke andar 
*/
/*
//String padding 
//using padStart() //left side ke add ho jayega 
let companyName = "myCoder"
//let paddedName = companyName.padStart(5)//yah kuch nhi hoga kyuki jo number aapne dia hai wo string ki length se bhi kam hai  
let paddedName = companyName.padStart(15)
console.log(paddedName)//iski length ab 15 aegi 

//using padEnd() //right side se add ho jayega 
let companyName = "myCoder"
let paddedName = companyName.padEnd(15)
console.log(paddedName)
*/
//Traling commas are the commas which we add at the end of an array , object , function and parameters
/*
spread operators in case of objects 
let student = {
    age : 17,
    name : "Tanishq",
    isStudent : true
}
let {age , ...others} = student
console.log(others)//yaha age ko chodd kar baaki saara dat a aa jayega 

//if you hae 2 objects and you eant to combine them 
let obj1 = {a:10,b:20,c:50};
let obj2 = {c:30,d:40}
let newObj = {...obj1,...obj2}
console.log(newObj)// c ki obj 2 wail value lega ye that is 30 par yahi array me ye aisa nhi karta tha waha ye c ki dono value ko show karta tha 
*/
//2019 ke updates of ECMA script 
/*
//Array.flat() use this method to convert a nested array to a 1 dimensional array 
let nestedArray = [1,2,[3,4],5]//ye aapki ek 2 dimensional array hai ya phir nested array hai
let flattedArray = nestedArray.flat()
console.log(flattedArray)
//par aagar aisa ho ki array ke andar array aur uske andar bhi array ho tab ye sirf 2nd wale array ko hatata hai 
let arr = [1,2,[3,[4,5],6],7]
let arrFlat = arr.flat()
console.log(arrFlat)
*/
/*
//flatMap() = ye map function ke saath flat function ko combiine kar deta hai ise use vaise hi karna hai jaise for each ko use karte the (currVla,index,arr) ke format me
const arr = ["My name","is Tanishq","saxena"]
const newArr =  arr.flatMap((currVal)=> currVal.split(""))//ek to ye tareeka hogya 
//dusra tareeka hoga ki aap Array.from(currVla ko use kar le)
console.log(newArr);//wahi array aa gyi jo pass kari thi
//agar aap map funciton ko use karte to aapko ek array ke andar yewala array miljata
*/
/*
//Object.entries = ye kya karta hai ye aapka object ki [key, values] ka array  bana deta hai
const person = {name:"tanishq", age : 17, college:"abesec"}
const entries = Object.entries(person)
console.log(entries)
//fromEntries(arr)  = object .entries se jo array aaya hai use agar array banan hai to yeh function use karo 
let newPerson = Object.fromEntries(entries)
console.log(newPerson)//ab object wapas aa gya 
*/
/*
//trimEnd() & trimStart() //inka kaam bas itna hai ki ye saare white spaces hata dete hai aur ek nyi string deteta hai aur jo trim() hota hai wo satrtig aur eng dono se extra space hata deta hai 

let str  = "    Tanishq    "
console.log(str.trimStart())//tart se space hata dega 
console.log(str.trimEnd())//end se space hata dega 
*/
/*
//Symbol
const mySymbol = Symbol("this is my symbol");
console.log(typeof(mySymbol));
console.log(mySymbol);
*/
/*
//Optional catching 
//we previosly had  to do 
try{
    //...
}catch(e){
    //handle error
}
Optionalcatching 

//Now we don't need to write (e)
try{
    //...
}catch{
    //code to handle the error 
}

try{
    tanishq+7;
}catch{
    console.log("there is an  error ")
}//ab agar is code me error aega to to wo console kar dega ki there is an error
*/
/*
//BigInt = JavaScript ki bhi ek limit hoti hai calculation ki wo usse jyada calculate nhi kar pata 
//agar aapko jaanana hai ki woh kitni hai to aap to aap yeh code likh do 
const numbers = Number.MAX_SAFE_INTEGER;
console.log(numbers)//ye woh number hai kaha tak  JavaScript aakhri tak calculation kar paega  
//agr iske upar calculation karni hai to aapko bigInt ka sahaara lena padega
const largeNumber = BigInt("23131346546798754454654654654")
console.log(typeof(largeNumber))//BigInt aa jayega
console.log(largeNumber)
//ab agar is bigint number me koi calculation karni hai to jo bhi number ho usme last me n laga do 
console.log(largeNumber + 10n)//hogya 10 add 
*/
/*
//Nulish coalesing operator = iske hisaasb se false value sirf do hi hongi ya to (null ya to undefined )
let favNum = 0//JS me 0 ka matlab false hota hai 
userFav = favNum || 10//in dono me se koi sa bhi ek lelega jo trur hoga aur 0 to waise bhi false hai to yeh 10 lelega
console.log(userFav)//isne 10 liya par ye galat hai isne 0 nhi liya user neise 0 dia tha par isne use false maankar 10 return kar diya isse bach ne ke liye aap (||) iski jagah nullish operator ka use karo (??)
userFav2 = favNum ?? 10;
console.log(userFav2)//ab ye 0 dega answer 
*/
/*
//Optional Chaining operator (?.)
//iske dwara aap object ki properties ko get kar sakte ho bina kisi chinta ke ki veh use present hai ki nhi 

let person = {
    name:"jhon",
    age : 30 ,
    add:{
        city : "raj nagar ext",
        zipcode :21345,
    },
};

//purana method 
const city = person.add ? person.add.city : "city is not present"//agar present ho to dikha dena else ye message show kar dena 
console.log(city)

//naya tareeka = optional chaining
const city1 = person.add?.city ?? "city is not present"// yaha ?? ka use isle kiya ki agar city ka naam  0 hota to ye to keh det a ki city is not present 
console.log(city1)
*/
/*
//2021 ECMA script ke updates 
//replaceAll(kisse,kisko)
let orgstr = "hey manoj how you doing what's up bro what's going on"
let newstr = orgstr.replaceAll("what's", "yours")
console.log(newstr)

//replacing multiple spaces with single spaces using replaceAll()
let text = "hey     this    is      tanishq saxena your best motivator"
let normalText = text.replaceAll(/\s+/g," ")
console.log(normalText)//ab har kisi ke beech me single space aa jayega
*/
//Logical Assignment Operator(||=,&&=,??=)
//jyada kuch khaas nhi hai wahi hai bas (=) ka sign laga kar useke likhne ka tareeka thoda sa aasan kar diya hai 
//2022 ke updates 
/*
//.at()= wise to ham array me agar koi element get karna hota hai to ham arr[index] ka use kar lete hai par agar aapko last index ka element chahie to aap ko at ka use karna padega
let arr = [1,2,3,4,5,6]
console.log(arr.at(-1))// 6 aa jayeg aas an output 
//Object.hasOwn(obj, propkey) = ye check karne ke liye hota hai ki obj me wo property hai ke nhi 
let obj = {
    name : "The office",
    actor : "Jim"
}
//purana tareeka 
console.log(obj.hasOwnProperty("name"))//true
console.log(obj.hasOwnProperty("star"))//false
//using object.hasOwn()
console.log(Object.hasOwn(obj,"name"))//true
console.log(Object.hasOwn(obj,"star"))//false
*/
/*
//Array.findLast() & Array.findLastIndex()

let arr = [1,2,4,5,7,8]
console.log(arr.findLast((elem) => elem))//last element aa jayega
console.log(arr.findLastIndex((elem) => elem))//last element ka index aa jayega
*/
//some new funciotns of array 
//toReversed()
let arr = ["tanishq","Jim","dwight","pam"]
console.log(arr.toReversed())//reverse ho jayega

//toSorted()
console.log(arr.toSorted())

//arr.with(index,"kisse")//ye replace ka hi kaam karega bas index number daalna hai or replace kisse karna hai wo aur batana padega 
console.log(arr.with(0,"Micheal scott"))