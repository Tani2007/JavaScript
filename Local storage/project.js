//ab ham java Script se main-todo wale section me data insert karwayege
const mainTodo = document.querySelector(".todo-list-elem")
const input = document.getElementById("myInput")
let addTodobtn = document.querySelector(".btn")



const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("fruits"))
}

const addTodoLocalStorage = (localTodoList) => {
    return localStorage.setItem("fruits",JSON.stringify(localTodoList))
}

let localTodoList = getTodoListFromLocal() || [];

//adding list dynaically 
const addTodoDynamicElem = (currElem) => {
    const divElem = document.createElement("div")
    divElem.classList.add("main_todo_list")
    divElem.innerHTML = `<li>${currElem}</li> <button class="deleteBtn">Delete</button>`
    mainTodo.append(divElem)
}


let addTodoList = (e) => {
    e.preventDefault()//ab mera form ekdum se submit nhi hoga 
    // console.log("testing")//ye ek second ke liye likha hua aega phir gaayab ho jayega kyu ki form jaldi se submit ho jata hai to prevent default submission of form use e.preventtDefault()

    //ab meko data ko local storage me add karna hai 

    
    const todoListValue = input.value.trim()
    input.value = ""
    
    if(todoListValue!="" && !localTodoList.includes(todoListValue)){
    localTodoList.push(todoListValue);
    localTodoList = [...new Set(localTodoList)]
    console.log(localTodoList)
    localStorage.setItem('fruits',JSON.stringify(localTodoList))
    
    /*
    //ab ek div create karo
    const divElem = document.createElement("div")
    divElem.classList.add("main_todo_list")//yaha ek class add ho jayegi
    //ab yaha hame li uar delete button add karna hai 
    divElem.innerHTML = `<li>${input.value}</li> <button class="deleteBtn">Delete</button>`
    mainTodo.append(divElem)
    */
   //iski jagah 
   addTodoDynamicElem(todoListValue)
}
}

const showTodoList = () => {
    console.log(localTodoList)

    localTodoList.forEach((currElem) => {
        addTodoDynamicElem(currElem)
    })
}
showTodoList()

const removeTodoElem = (e) => {
    const todoToRemove = e.target
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    let parentElem = todoToRemove.parentElement;
    
    //console.log(todoListContent)
    localTodoList = localTodoList.filter((currTodo) => {
        return currTodo != todoListContent.toLowerCase()
        
    })
    addTodoLocalStorage(localTodoList);
    parentElem.remove();
    console.log(localTodoList)
}



mainTodo.addEventListener("click",(e) => {
    e.preventDefault();
    removeTodoElem(e);
})

//addding an event listener to the btn 
addTodobtn.addEventListener("click",(e) => {
    addTodoList(e)
})

//yaha upar hamne callback me (e) islliye pass iya hai kyuki ham abhi form ke saath deal kar rahe hai to form ke saath deal kate hue aapko ye karna hota hai 

/*
addTodo funtion me me aap ko prevent karna hai default form submission se 
create a new Todo element(e.g = a div with a class main_todo_div)
appent new element to the container("main todo elem")
store data in an array format in localstorage.setItemms
*/

/*
ab mujhe chahiye ki jab bhi koi bhi page refresh kare to purana data wapas aa jaye

Uska tareeka 
1 = create a function(gettodolist) to retrive todo data from local storage using localStorage.getItem
use JSON.parse to convert the stored string to an array
*/
/*
show todo list of local storage 
1 = create a function showTodo to display todos on a page load
2 = iterate through the array and dynamically add todos to the container
*/
