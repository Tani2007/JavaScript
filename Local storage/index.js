//local storage object allows you to save key values pair 
//local dtorage object stores data with no expiration date 
//data isn't deleted even when the browser is closed an davilable for the future session 
/*
//Now we are gonna learn 
//1= how to add or store data in local storage 
//2= how to get or retrive data from local storage 
//3=how to remove data from local storage 

//To add Data in local storage
//syntax 
//localStorage.setItem("key","value")
localStorage.setItem("JavaScript","course")
"javaScript key hogi aur course value hoga"

//To get data from local storage 
//syntax 
//localStorage.getItem("key")
localStorage.getItem("JavaScript")

//To remove any local storage item
//syntax 
//localStorage.removeItem("key")
localStorage.removeItem("JavaScript")

//Note = local storage only stores string value but if you need need to store any array or object then you need to convert it into string using JSON.stringify

//JSON.stringify : converts a array or a object into JSON string 
//JSON.parse : converts a JSON string into a JavaString object 
*/
let studentBiodata = {
    stname : "Tanishq Saxena",
    age : 17,
    course : "B-Tech",
    add : {
        street : "B-624 Bankey Bhihari Sharnam",
        city: "Raj Nagar Ext",
        state : "Uttar Pradesh"
    }
}
//now i am gonna onvert this object to an string by using JSON.stringify
let storage = () => {
    localStorage.setItem("Bio Data",JSON.stringify(studentBiodata))
}
storage()
//now i am gonna get data fron local storage using JSON.parse
let getstorage = () => {
    let getitem = JSON.parse(localStorage.getItem("Bio Data"))
    console.log("retrived",getitem)
}
getstorage()//agar iswale me JSON.parse  nhi use kiya hota to phir aapko data me ek object nhi string milti

//To remove data 
localStorage.removeItem("Bio Data")
