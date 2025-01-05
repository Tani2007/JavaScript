//Some major changes of Ecma Script 2015
/*
1-Let & Const 
2-Template litrals
3-Default Argument 
4-Arrow Function 
*/
/*
//Let 
Let ka scope sirf ek block me hota hai uske bahar uska koi matlab nhi hota jaise agar koi let if ke andar hai to if ke bahar uska ko matlab nhi hoga 

//Const 
const ko constant variable hota hai wo kahi change nhi ho sakta na if ke andar na if ke bahar.

//Var 
var ko jahan change karoge vaha change ho jayega 
*/
/*
//Template litrals 
//example --
let myName = "Tanishq Saxena "
console.log(`My name is ${myName}`)
//agar ye nhi hota to hame kuch aise karna padta 
//console.log("My name is  "+myName)
*/
/*
Default argument -- koi ek argument kisi function me default ho yani predefined ho to wo default hota hai 

function sum(a,b=5){
    return a+b;
}
console.log(sum(4))
//par agar mai b ki koi aur value daalu function call karte waqt to wo value ho jayegi
console.log(sum(3,8))
*/
/*
//One of the most Important = Arrow Function
//Jo Function wale folder me anonymous function banaya tha wo hi aage chalke thode changes ke saath arrow function ban jayega.
//Syntax 
const functionName = (param1,param2,...) =>{
    //function body
    return result;
};

//example
const sum = (a,b) => {
    console.log(a+b)
}
sum(5,7)

//par agar arrow function ke andar ek line ka code ho or koi return statement na ho to aap {}  in brackets ka prayog na kare

const sum = (a,b) => console.log(a+b)
sum(5,7)

//one more example
const greet = () =>{
    console.log("Hey whats's up whats goin on")
}
*/
/*
//Question = 1
const calulator = (a,b,c) =>{
    if(c=="+"){
        console.log(a+b)
    }
    else if(c=="-"){
        console.log(a-b)
    }
    else if(c=="*"){
        console.log(a*b)
    }
    else{
        console.log(a/b)
    }
}
calulator(4,5,"+")

//Trying to do it using switch case statement
const calculator = (a,b,c) => {
switch (c) {
    case "+":
        console.log(a+b)
        break;
    case "-":
        console.log(a-b)
        break;
    case "/":
        console.log(a/b)
        break;

    default:
        console.log(a*b)
        break;
}
}
calculator(6,5,"+")

//Question = 2 -- write a function to reverse a string without using string built-in reverse method.
const reverseString = (a) => {
    let reverse = "";
    for (let i = a.length-1; i >= 0; i--) {//a.length-1 isliye kiya kyuki length 7 hai par hame loop 6 se 0 tak lekar jaana hai.
        reverse += a[i];
    }
    return reverse;
};
console.log(reverseString("Tanishq"))

//Question = 3 -- To write a program of pallendrome
const reverseString = (a) => {
    let reverse = "";
    for (let i = a.length-1; i >= 0; i--) {//a.length-1 isliye kiya kyuki length 7 hai par hame loop 6 se 0 tak lekar jaana hai.
        reverse += a[i];
    }
    console.log(reverse) ;
    if(reverse == a){
        console.log("it is a pallendrome")
    }
    else{
        console.log("not a pallendrome")
    }
};
reverseString("Tanishq Saxena")
*/