//Now we'll learn about if - else statement interview question 
/*
//Question -1 -- if the person is >=18, a citizen ,and a registered to vote display a message saying they are eligible to vote  

//solution
let age = 18;
let isCitizen = true;
isRegisteredToVote = true;
if(age >= 18 && isCitizen && isRegisteredToVote ){
    console.log("you are eligible to vote")
}
else {
    console.log("you are not eligible for vote")
}

//Question = 2 -- To check a given number is even or odd 
let num = 2
if (num%2 == 0){
    console.log("It's an Even number")
}
else{
    console.log("its's an odd number ")
}

//Question = 3 -- to check a given number is prime or not 
let num = 21;
let prime = 0
for (let i = 1; i < num+1; i++) {
    if(num%i == 0){
        prime +=1
    }
}
if(prime == 2){
    console.log("it's a prime number")
}
else{
    console.log("it's not a prime")
}


//Question write a prgram to check a number id positive,negative or zero.

let num = 5;
if(num === 0){
    console.log("its a zero number")
}
else if(num<0){
    console.log("its a negative number")
}
else{
    console.log("its a positive number ")
}
*/
/*
//Switch Statements--
//Switch statements are used to make if else statement easier 

? Syntax :
switch (expression){
    case value1;
        //Code to be executed if expression === value1
    break;

    case value2;
        //Code to be executed if expression === value2
    break;

    //More cases could be added

    default:
        // Code to be excecuted if none of the case match
}
*/

let day = "Monday"

switch(day) {
    case "Monday":
        console.log("Hey its monday its a working day ")
        break;
    case "Friday":
        console.log("Hey it's last working dayof the week lets have a party tonight ")
        break;
    case "Sunday":
        console.log("we will have to work again from tomorrow")
        break;
    default:
        console.log("lets do our job")
}
