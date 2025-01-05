//ab yaha ham is function aur is variable ko declare karne se pehle hi run karenge 
/*
console.log(myVar)//undefined
greet()//function run oh jayega
var myVar = 10
function greet(){
    console.log("hey everything good")
}
*/
//myVar ko console karte waqt undefined isliye aaya kyuki js reserves the memory for the variable and sets an inetial value of undefined and for function it reserve the space but sets the actual function value
//par ye hoisitng sirf var me kaam aega let aur const me nhi 
//aur agar ye function fat arrow function ban gya tab bhi ye error dega pehle run hone par
/*
greet()//ab error dega
let greet = () => {
    console.log("hey everything good")
}
*/
//scoping
//Lexical scoping = set of rule jo batata hai ki is variable ki value aap kaha use kar sakte hai aur kaha nhi

//block scope variable= ek block(funciotn) ke andar define hua  variable ka scope uski value wahi tak seemit rehti hai 
//glbal scope variable= jo variable globally define hua hai yaahi function ke baaha ya kisi block ke bahaar 

//A closure is creted when an inner funciton has access to the variables of its outer function,even after outer function has finished executing

function outerFunction() {
    var outerVariable = "i'm outer"


    function innerFunction() {
        console.log(outerVariable)
    }
    return innerFunction
}

var closureFunction = outerFunction();
closureFunction();//is funciotn ko inner wale ka data use nhi karna chahiye tha kyuki return statement ka use hua hai ye sab closure ki vajah se ho raha hai 