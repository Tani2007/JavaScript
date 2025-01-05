//in JavaScript object is a collection of key and value pairs including other object and object have proerties of methods 
//agar multiple data type ke data ko store karna hai then go with object aur agar similar data type hai then go with array 
//Syntax - obj = {}
/*
let product = {
    id:1,
    pName:"Tanishq",
}
console.log(product)
*/
/*
let person = {
    name: "Tanishq",
    age: 17,
    isStudent: true,
    greet: funciton() {
        console.log("hey welcome to object")
    },
};
//ab yaha greet hamara method ban chuka hai

//object ke andar koi hi likha hua function method kehata hai 
*/
/*
let person = {
    id:1,
    Name:"Tanishq",
    age:17,
    isStudent: true,
    greet: function () {
        console.log("hey here you go")
    },
}
}
//to get elements of objects use this method 
console.log(person.Name)
console.log(person.age)
console.log(person.isStudent)
console.log(person.greet())//funciton access ho jayega 
*/
/*
//par agar object aisa hota aur aapko is'Student ki value chahiye hoti to phir ye karna padta hai
let person = {
    id:1,
    Name:"Tanishq",
    age:17,
    "is'Student": true,
    greet: function () {
        console.log("hey here you go")
    },
}
console.log(person["is'Student"])//ya phir aap aise bhi likh skte ho console.log(`is'Student`)
//aap baaki values bhi isi tareeke le paa sakte ho 
console.log(person["id"])
console.log(person["Name"])
//To add something in object or modify  
person.job = "web dev"//job add hogya 
person["age"] = 18//age modify ho jayegi 
console.log(person)

console.log(person.greet())//funciton access ho jayega 
//par ye funciton greet ko console karte samay aapko ek undefined aa jayega kyuki aap kuch return nhi kar rahe usse bachne ke liye ya to console ko suntion se hata kar return laga do ya phir calling ke dauraan console hata do kuch aise 
person.greet()//ab undefined nhi aaega
*/
/*
let idType = "collegId"//ab object me idType ki jagah collegeId aa jayega par ye cheez react me jyada kaam aati hai 
let person = {
    [idType]:"A1234T",//ye dynamic id ban gyi hai matlab agar aak ko is id ko college id ya office id kuch bhi bana hai to ye ban jaygi aapko idType ko square brackets me lena hai sur upar define kar do ki idType kya hai 
    Name:"Tanishq",
    age:17,
    isStudent: true,
    greet: function () {
        console.log(`hey my ${idType} is ${person[idType]} and my name is ${person.Name}`)
    },
}
//console.log(person)
person.greet()
*/
/*
//ab paas by value aur paar by refrence samjho
//pass by value = jab bhi aap orijnal wale me change karte hai to jitne bhi obj jo orignal se connected hai unme koi change nhi aega

let num = 10
let numInc = (x) =>  (x = 20);
console.log(numInc(10))
console.log(num)

//pass by refrence = jab bhi aap orijnal wale me change karte hai to jitne bhi obj jo orignal se connected hai unme change ho jayega
let obj = {id: 5, name:"Tani"}
let obj1 = obj
obj1.name="Tanishq"
console.log(obj1)//same output aega jo console obj karke aega
//console.log("orignal" + obj)//yaha aapko output [object Object] aa jaye ga kyu ki aap sting aur object ko concat kar rahe ho to JavaScript dono ko object me badalne ki kosish karega isko concat karna hai to comma ko + se replace kar do
console.log("orignal", obj);//same output jo obj1 ko console karke aaya tha

//agar aap chate the ki ap copy kare aur orignal wale me change nhi aye to aapko Object.assign() ka use karna padega ya phir spread operator(...)
//Object.assign() is used to copyproperties from one or more source object to a target object 
let obj = {id: 5, name:"Tani"}
let newObj = Object.assign({},obj)//ab obj is empty object{} me assign ho  jayega yani copy ho jayega
newObj.name = "Tanishq"
console.log(orignal,obj)
console.log(newObj)//ab output alag alag ayega 
*/
//agar 2 obj jinka naam alag hai par andal value same hai to kya wo equal hai nhi kyuki dono ki storage alag hai memory me dono ek dusre ki copy nhi hai 