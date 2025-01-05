// if we do 5 + 75 the 5 and 75 are operands and + is a operator

/*
//Asignment Operator is "="
var price = "₹100"//example
//Arithmatic Operators are -- "+","-","/","%"
*/
/*

console.log(5=5)//it'll raise an error as "=" is a asignment operator 

Comparision operator -- always give the value either true or false and data type should be same.


console.log(5==5)//it'll give true as 5 is equal to 5 since w8e have used "==" hence it will compare both the values

//But what when you check 2 values of different data type for example 
console.log(5 == "5")//both the values are equal but they have different data types yet it wil give you true 

//what if you want to check value and data type as well,for this problem we have a special airthmatic operator "===".

console.log(5==="5")//now it will give you the right answer that is false ,Since they both aren't equal.
*/
/*
//Logical operator 

1-
&&-And Operator - both the value should be true then it gives true or else false 

2-
||-Or Operator - any one value should be true then it gives true or else false 

3-
!-Not Operator - it just gives the opposite if its true then false and vice-versa 
*/
/*
//Question to wirte a program
let age = 18;

if(age >= 18){
    console.log("you could drive")
}
else{
    console.log("you could not drive")
}

//Anther program to write same --
let haveDrivingLicense = true;
let age = 18;
console.log(age>=18 && haveDrivingLicense)
*/
/*
//Ternary Operator or short orm of if,else 
//syntax: consdition ? expressionIfTrue : expressionIfFalse;
//Doing the same program by using ternary operator--
let age = 18
let result = age >= 18 ? "Yes eligible" : "Not eligible for drive "
console.log(result)
*/
let marks = 60;
let result = marks >= 60 ? "you are passed" : "You are failed"
console.log(result)