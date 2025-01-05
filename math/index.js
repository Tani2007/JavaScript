//Maths 

//Difference beween  round floor and ceil 
/*
//Math.ceil()
Always rounds to the nearest integer.
//aage wale integer me round kar dega
console.log(Math.ceil(4.1))//output = 5
console.log(Math.ceil(4.9))//output = 5
*/
/*
Math.floor()//ek peeche wale integer me roung kar dega just like gretest integer 
console.log(Math.floor(4.1))//4
console.log(Math.floor(4.9))//4
*/
/*
Math.round()//round to nearest integer
console.log(Math.round(4.5))//5
console.log(Math.round(4.3))//4
// ye .5 se pehle ke number ko usse pehle wale int me badal dega aur .5 ke baad wale ko uske baad wale integer me badlega
*/
/*
//Math.PI//ye pi ki value dedega
console.log(Math.PI)//pi ki value aa jayegi 3.14
*/
/*
//Math.abs()//aboulute funtion ye dekhata hai ki jis number se aap match karana chahte ho wo 0 se kitna door hai 
console.log(Math.abs(5))// ye 0 se 5 door hai 
console.log(Math.abs(-3))//ye 0 se 3 door hai 
*/
/*
//Math.trunc()//ye aapko point ke aage wala integer dedega par ye floor se alag hai 
console.log(Math.trunc(4.5))//4
console.log(Math.floor(4.5))//4
console.log(Math.trunc(-4.5))//-4
console.log(Math.floor(-4.5))//-5//kyuki ye gretest integer hai 
*/
//Math.pow(x,y)//returns the value of x to the power y
//Math.sqrt(x);//return the square root of x
//Math.log(x) returns log(x)
/*
//Generate Random number
//Math.random() return a random number from 0(inclusive) to 1(exclusive)
console.log(Math.random())
//agar 0 se 100 tak karana hai to multiply by 100 kar do
console.log(Math.random()*100)

//jitne decimal chahie utne par toFixed laga do
console.log((Math.random()*100).toFixed(3))//sirf 3 decimal aenge

//Getting a random number between two values
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
*/