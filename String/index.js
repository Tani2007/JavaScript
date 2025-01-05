//String in Js are fundamental data type that represents the sequence of character it can be written in either single or double quotes.
/*
//To find the length of string
const str = "Hey Tanishq Saxena"
console.log(str.length);//ye space ko bhi count karta hai
*/
/*
//escape character
//if you want to cover anything in double quotes or single quote inside string use escape character 
let text = "hey i'm Tanishq Saxena i'm a full stack devloper"
console.log(text)//What if you want to add double quotes in the name like this "Tanishq Saxena"

//let text = "hey i'm "Tanishq Saxena" i'm a full stack devloper"
//console.log(text)//error aa jayega
let text = "hey i'm 'Tanishq Saxena' i'm a full stack devloper" 
console.log(text)//ab error nhi aega 
//aap bahhar single quotes aur andar dooble quotes bhi use kar sakte ho 

//par aapko agar single quotes ke andar ek jagah double aur ek jagah single quotes use karna hai to just uske aage ek backslash laga do \
let text = "hey i'm \"Tanishq Saxena\" & i'm a full stack devloper" 
console.log(text)

//now if you want to give a new line after & then 
let text = "hey i'm \"Tanishq Saxena\" &\n i'm a full stack devloper"
console.log(text)
//To aapko kuch bhi special character use karna hai to aap kar sakte ho by adding backslash before it
*/ 
/*
//Searching Method in Strings 

//indexOf()
let text = "Tanishq Saxena"//yaha a repeating hai  to yeh pehle wale a ka index de dega
console.log(text.indexOf("a"))//index of first a is 1
console.log(text.indexOf("t"))//return -1 as small t isn't there in the string 
*/
/*
//One of the most important Method that convert string to an array is
//array.from
//syntax
//Array.from(str)
let str = Array.from(text)
console.log(str)//ab ye array ban gya hai har ek letter ka 
*/
//lastIndexOf() // same as array me jo padha tha hamne 
/*
//search() Method 
//return the index value if it founds orelse return -1
let text = "hey we are learning JavaScript from last few days"
let result = text.search("JavaScript")
console.log(result)//JavaScript 20th index se start ho raha hai 

let result = text.search("tanishq") 
console.log(result)//nhi mila to -1 return kar diya 

//To fir isme or indexOf me farak kya hua 
//maan lo mai search karta hu Javascript par text ke andar JavaScript likha hai S capital hai then
let text = "hey we are learning JavaScript from last few days"
let result = text.search("Javascript")
console.log(result)//nhi melega aur -1 aa jaye ga par agar iski casesenstivity ko ignore karwana hai to fir

let text = "hey we are learning JavaScript from last few days"
let result = text.search(/Javascript/i)//ab ye casesenstivity ko ignore kar dega
console.log(result)//ab aa jaega
*/
/*
match()
ye mach karega agar nhi mila to null dedega aur agar milgya to ek array dega jisme vo value uska index usaka parent string dedega

let text = "hey we are learning JavaScript from last few days"
let result = text.match("javascript")//vaha par capital me j aur s hai to ye aapko null dega
console.log(result)//returns null

let text = "hey we are learning JavaScript from last few days ,are not we?"
let result = text.match("JavaScript")
console.log(result)//ab ye ek array dega jo ki iski value index parent string contain karega 
//behing the scene ye aise kaam karta hai  
//text.match(/JavaScript/)//aise jaata hai ye show hone ke liye
//par agar aap "g"global flag add kar do to wo array nhi aega sirf ek hi array aega us value ka 

let text = "hey we are learning JavaScript from last few days ,are not we?"
let result = text.match(/are/g)//jitne are aenge wo display ho jayenge
console.log(result)
//agar aap yaha par bhi case senstivty vala flag laga do "i" to aapka case senstivity check nhi hoga 
let text = "hey we are learning JavaScript from last few days ,are not we?"
let result = text.match(/Javascript/i)//ab null nhi aega kyuki ab wo casesenstivity ko skip kar dega
console.log(result)
*/
/*
//matchAll() method
//Ek big difference yeh hota hai ki isme global flag pehle se laga hota hai aur match me nhi hota

let text = "hey we are learning JavaScript from last few days ,are not we?"
let result = text.matchAll("Javascript")//ye match nhi karega kyuki "s" small hai to aapko empty iterator return hoga
console.log(result)//empty iterator aega

//Par agar
let text = "hey we are learning JavaScript from last few days ,are not we?"
let result = text.matchAll("JavaScript")
console.log(result)//abhi bhi empty iterator aega par agar 
console.log(...result)//ab ye match wale ki tarah ek array return karega jisme index aur parent string sab kuch aega

//par agar aapko sirf value chahie to fir us array ka first element nikaal lo 
let text = "hey we are learning JavaScript from last few days ,are not we?"
let result = text.matchAll("are")
//result me for of loop use kar do as it is an array 
for (const item of result) {
    console.log(item[0])
}
*/
/*
//includes()same as array 
let text = "hey we are learning JavaScript from last few days ,are not we?"
result = text.includes("Java")
console.log(result)//true as it will only search Java from JavaScript
*/
/*
//startsWith()
//syntax
//str.startsWith("start",index)
let text = "hey we are learning JavaScript from last few days ,are not we?"
let result = text.startsWith("hey")
console.log(result)//true

//endsWithWith()//give either true or false
//syntax
//str.endsWithWith("start",index)
*/
/*
//Extracting String Parts
//slice() extracts a part of a string and returns the extracted part in a new string 
//syntax
//slice(strat, end)//par ye end index -1 tak ka new string dega 

let text = "Hey Tanishq Saxena what's up "
console.log(text.slice(1,5))//1 se 4 index ka string return kar dega 

//substring() method 
//syntax is same as slice
//it works same as slice.

//difference in substring() and slice()
let text = "hey what's up guys what's going on"
console.log(text.slice(-6))//-1 se -6 tak ka data de diya.
console.log(text.substring(-6))//ye sara data dedega 

//at() 
console.log(text.at(-1))//jo bhi character hoga us index par wo return kar dega 
//replace ("a","b")//a = jise karna hai b = jisse karna hai 
console.log(text.replace("hey","Hello"))
//if some word occurs twice or more then
console.log(text.replaceAll("what's","what is"))
*/
/*
//Extracting String Charcter 
//charAt()
let text = "hey what's up guys what's going on"
console.log(text.charAt(4))//4th index par w hai 
//charCodeAt() this will give you the code of char 
console.log(text.charCodeAt(4))//4th index par jo char hak "w" uska code aagya

//par at() method se (-1) wale index ka data bhi aa sakta hai 
console.log(text.at(-1))//-1 index ka char dedega that is -1
*/
/*
//replace method
//replace ("a","b")//a = jise karna hai b = jisse karna hai 
console.log(text.replace("hey","Hello"))
//if some word occurs twice or more then
console.log(text.replaceAll("what's","what is"))

//Case insensitive replacement : no matche that replacing word is uppercase or lower case
let text = "Hey what's up guys what's going on"
let replacedString = text.replace(/hey/i,"hello")
console.log(replacedString)
*/
/*
//trim() to cut starting or ending space
//syntax
//str.trim()
*/
/*
//split() method split a string to an array 
let fruits = "apple,pineapple,banana"
let splitter = fruits.split(",")//jaha jaha "," hai waha waha se split kar dega aur arrray dedega
console.log(splitter)
//par agar ulta array chahie to reverse use kar le

let fruits = "apple,pineapple,banana"
let splitter = fruits.split(",").reverse();
console.log(splitter)
//To convert array to an string 
let arr = [1,2,3,4]
console.log(arr.join())
*/
/*
//QUestion = 1 --wite a program to write a to z alphabet using for loop
console.log("a".charCodeAt(0))//it'll provide you char code of "a" = 97
console.log("z".charCodeAt(0))//char code of "z" = 122
console.log(String.fromCharCode(122))//ye aapko "z" dedega

for(let char=97; char <=122; char++){
    //console.log(char)//ye saare a to z tak ke code de dega par hame use alphabet me convert karna padega
    console.log(String.fromCharCode(char))
}

//Question = 2 --write a program to count number of vower in a string 
let quote = "hey good to see you"
let arr = Array.from(quote)
console.log(arr)
let result=0;
for (const char of arr) {
    if(char == "a"||char == "e"||char =="i"||char =="o"||char =="u"){
        result +=1
    }
}
console.log(result)

//Another easy way of doing Question =2
let vowelCount = (str) => {
    let vowel ="aeiou"
    let count = 0;
    for(let char of str){//hamne char me str ka ek ek element le liya 
        if(vowel.includes(char)){//ab co har str ke char ke liye check karega ki vowel use include karta hai ki nhi agar karta hai to char +1 ho jayega   
            count++;
        }
    }
    return count;
}
console.log(vowelCount("hey you are being shuned by me"))

//Question = 3 to check the string contains all the vowels or not 
let vowelCheck = (str) => {
    let vowel = "aeiou"
    for(let char of vowel){
        //console.log(char)//saare vowel one by one aa jayenge 
        //console.log(str.includes(char))//ye check karta hai ki isme saare vowel hai ki nhi 
        if (!str.includes(char)) {
            return ("it doesn't contain all the vowel");
        }
    }
    return "it doen't contain all the vowel"
}
console.log(vowelCheck("hey not a big deal")) 


*/

//Question = 4 - To check the given string is a pengram or not pangrem means that if a string contains a to z all the alphabet doesen't matter if they repeat.


let pengram = (str) => {
    let arr = str.toLowerCase().split("")
    //console.log(arr)//ek ek letter ka array bana dega
    const values = arr.filter((currElem) => 
        currElem.charCodeAt() >= "a".charCodeAt() && currElem.charCodeAt() <= "z".charCodeAt()
    )
    //console.log(values)//saari values aa jayengi space hata kar
    /* 
    if(values.length === 26){
        console.log("yes")
    }
    else{
        console.log("no")
    }
    */
   //isse accha tareeka if else se accha
   return ([...new Set(values)].length) === 26;//values ke ek ek element ka object aa jaega or aur uske aage set(26) likha hoga jitne element us array me honge utna likha hoga aur duplicate values hat jaenge
   //new set array ka unique value ka set dedega

   //ye bracket array banane ke liye lagae hai kyuki veh object hai

   //... teen dot isliye lagae kyuki pure array ki form me nhi aa raha tha 
}
console.log(pengram("abcdefghijklmnopqrstuvwxyz"))//yes aa jayega answer.