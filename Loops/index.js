//While loop 
//Syntax 
/*
while(condition){
    //code to be executed
}
*/
//Do While loop
//Syntax
/*
do{
    //code to be executed
}while(condition);
//it will run the code once as the condition check is after the execution of code 
*/
/*
//For loop 
for (inetializer;condition; iteration){
    //code to be executed
}
*/
/*
//To Print numbers from 1 to 10 usin all the loops 
let i = 1;
while(i<=10){
    console.log(i)
    i++;
}

let i = 0
do{
    i++
    console.log(i)
}while(i<10)


for (let i = 0;i<=10; i++) {
    console.log(i)
}
*/

/*
//Lets create the table of 5;
let num = 5
let i = 1
while(i<=10){
    //console.log("5 X "+ i + " = " + num*i)
    //Using the above thing using template litrals
    console.log(` 5 X ${i} = ${num * i}`)
    i++;
}
*/
//To create a prompt which will only take positive number and shoe that the number is valid or not.
/*
let userInput;
let positiveNumber;
do{
    userInput = prompt("Hey enter any number and please do not enter any string or else you will have to enter it again and again")
    positiveNumber = parseInt(userInput)
}while(isNaN(positiveNumber) || positiveNumber <0);
console.log("you have entred a valid number")
*/
/*
//Question - 1 -Using for loop calculate the sum of first 10 natural numbers 

let sum = 0;
for (let i = 0; i <=10  ; i++) {
    sum +=i
}
console.log(sum)

//Question = 2 - program to check  if a year is a leap year
let year = 2024 
if(year%4 === 0 && year%100 !=0 || year%400 ===0 ){
    console.log("it's a leap year")
}
else{
    console.log("it's not a leap year")
}
*/
//Question = 3 -To create the same star pattern which we had to draw in every programming language 
for(let i = 1 ; i<=5 ; i++){
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern = pattern + "*"
    }
    console.log(pattern)
}