//What is function -- its a block of reusable code 
//Syntax 
/*
function functionName(parameters) {
    //code to be executed
    return result;//optional return statement
}
*/
/*
//return wala tareeka 
function sum(a,b){
    return a+b;
}
let add = sum(2,8);
console.log(add)
//without return statement
function sum(a,b){
    console.log(a+b)
}
sum(6,5)

function name(name) {
    console.log(`hello ${name} welcome to my office`)
}
name("tanishq")
*/

/*
//Anonymous Function -- jiska koi naam na ho wo anonymous hota hai par agar koi naam nhi hai to use call kaise karoge isliye use ham ek variable me store kar lenge.

//To use Function as a part of variable 
let myname = function yourname(name) {
    console.log(`hello ${name} welcome to my office`)
}//ab function ka naam yournamenhi raha balki myname ho gya hai 

//Ab agar is function ko yourname ke naam se call karoge to error aega
//yourname("tanishq")//arror
myname("tanishq")//No error
*/
/*
//IIFE -- immediately invoked function 
//Syntax
(function () {
    //code to be executed
})();
example--
(function (a,b){
    console.log(a+b)
})(5,19);

agar isi ko function expression banana hai to use variable me store kar do 

let result = (function (a,b){
    //console.log(a+b)
    return a+b;
})(5,19);

console.log(`the sum is ${result}`)
*/