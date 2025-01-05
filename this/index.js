//this keyword refers o different objects depends on how it is used --
//in an object method(funciton), this refers to the object 
//alone ,this refers to the global object
//in a function , this refers to the gobal object 
//in a function in strict mode, this is undefined 
//in an event ,this this refers to the element that recieved the event
//Methods like call(),apply()  and bind() can refers this to any object
/*
//using this in a function
function callme() {
    console.log(this)
}
callme()//ye aapko window object dedega kyuki upar likha hua hai in a function ,this refers to the global object(window object)


//using this alone 
console.log(this)//ye bhi merko window object hi dega kyu ki alone, this refers to global object that is window object 

//using this in strict mode ive undefined
//strict mode ke andar likha hua code me syntax error nhi kar sakte jaise har line ke baad (;) ye laga na nhi bhul sakte nhi to veh error dedega  e.g. = let name = "Tanishq";//(;)lagana bhi jaruri hai

//using this in an object method(function)
let obj = {
    name:"letsCode",
    greet: function() {
        console.log(this)
    }
}
obj.greet()//ab this keyword ki wajah se ye pura object ko refer karega merko pura object nikal kar aa jayega

//But in an fat arrow function inside object,this refers to window(global)object
let obj = {
    name:"letsCode",
    greet: () => {
        console.log(this)
    }
}
obj.greet()//window object dedega
*/
/*
//Object.keys(obj) = give you all the keys

let products = {
    name:"GoogleTv",
    brand:"sansue",
    preice:"₹12000",
    description:"8 cores google tv with powerfull proccessers"
}
let keys = Object.keys(products)
console.log(keys)
//Object.values(obj)=give all the values 
let values = Object.values(products)
console.log(values)

//Object.entries(obj) = return an array of key-value pair aur saaare key value pair ka khud ka ek array bana dega
let products = {
    name:"GoogleTv",
    brand:"sansue",
    preice:"₹12000",
    description:"8 cores google tv with powerfull proccessers"
}
let entries = Object.entries(products)
console.log(entries)

//Object.hasOwnProperty()
console.log(products.hasOwnProperty("name"))//true
console.log(products.hasOwnProperty("isStudent"))//false

//Object.assign(kisme,kidko) = wahi ham dekh chuke hai objects me copy karne ke kaam aata hai 
let target = {a:1,b:2}
let source = {b:3,c:4}
let copier = Object.assign(target,source)
console.log(copier)//par yaha jo object nikal kar aega usme b ki value 3 hogi kyuki source ko target me daala hai aur source me b ki latest value hai 3

//Object.freeze() = agar aap use freez kardo to ab usme koi change nhi kar sakta 
Object.freeze(products)
products.name = "AndroidTv"//koi farak nhi padega
console.log(products)

//you can not use for of loop in array but you can use for in loop in an object
for (const key in products) {
    console.log(key)//saari keys mil gyi
    console.log(products[key])//saari alues aa jayengi
}
*/ 
//for in loop in an array
let arr = ["Tanishq","saxena"]
for(let key in arr){
    console.log(key)//yaha index aaega because key is in dex
    console.log(arr[key])//yaha values aa jayengi
}