//First class Function means agar aap kisi function ko value ki tarah  treet kar rahe ho  ya phir use kisi variable me pass kar dete ho to wo first class function ban jaata hia 
/*
//ye ham vaise padh chuke hai we have already done it 
function sayHello(name) {
    console.log("hello"+name)
}
//by writing the below line it has become a fist class function 
let greetFunction = sayHello;
console.log(greetFunction("Tanishq"))
*/
/*


//Higher order Function = a higher order function is a function that takes one or more function as an  argument and return a funciotn as a result.

//callback function = is a function passed as an argument to another function and executed after complition of a task.
function processUserInput(name,greetUser){
    console.log("Received input: "+ name)
    greetUser(name);
}
//Function to be used as a callback
//ye upar processUserInput me jo aapne callback diya hai ye koi normal funcotn nhi  hai yeh ek function hai jo ki calling ke time par greetUser ke naam se bulaya gya hai 
function greetUser(name){
    console.log(`hello${name}`)
}
processUserInput("Tanishq",greetUser) //greet user function ko ek dusra function me pass kar diya to greetUser to callback function hua 
//aur processUserInput function jo ek dusre function ko as an argument liya hua hai wo higher order function hua 
*/
//lets do an interview question on it 

let add = (a,b) => {
    return a+b;
}
let sub = (a,b => {
    return a-b;
})


const mathOperations = (a,b,operation) => {
    return operation(a,b)
}

console.log(mathOperations(19,17,add))

//yaha mathOperation kehlaega aapka higher order function aur add and sub kehlaenge callback function