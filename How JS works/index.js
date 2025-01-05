//How JavaScript works 
//1st step is to convert our code to tokens and then ast(tree) then compilation jaha wo machine code me convert hojata hai uske baad execution of code 

//synchronous means aapke code me har ek cheez line by line run hogi pehle upar wala code phir jab wo execute ho jayega tab uske neeche wala code execute hoga 

//ascynchronous means = aapka code kabhi bhi execute ho jayega no matter aapne use aage likha hai ya peeche 
/*
//example of synchronous function
let fun2 = () => {
    console.log("fun 2 starts and ends")
}

let fun1 = () => {
    console.log("hey  fun 1 starts")//pehle ye 
    fun2()//jab tak upar wali line run nhi ho jati tab tak ye kaam nhi karega
    console.log("fun1 ends")//jab tak fun 2 nhi mil jaata tab tak ye line execute nhi hogi
}
fun1()
*/
//ab iskko asynchronous banate hai 
let fun2 = () => {
    setTimeout(() => {
        console.log("fun 2 starts and ends")
    },2000)
}

let fun1 = () => {
    console.log("hey  fun 1 starts") 
    fun2()//ye setTimeout hai joki async behavious hai isliye iske run hone se pehle ye run ho jayega
    console.log("fun1 ends")//ye upar wale se pehle run ho jayega iske 2 sec ke baad upar wala run hoga
}
fun1()
