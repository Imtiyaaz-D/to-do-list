const addItem = document.querySelector("#addItem")
const sortItem = document.querySelector("#sortItem")
const listInput = document.querySelector("#listItem")
const output = document.querySelector("#item-List")

let itemList = []

addItem.addEventListener("click",(e)=>{
    e.preventDefault()
    if(listInput.value){
        listInput.push(listInput.value)
        listInput.value = ""
    }else{
        listInput.style = "outline 2px solid red";
    }
    // local storage
    localStorage.setItem("items",JSON.stringify(listInput) )
})
sortItem.addEventListener("click",(e)=>{
    e.preventDefault()
    listInput = JSON.parse(localStorage.getItem("items"))
    listInput.forEach( (item) => {
        output.innerHTML +=`
        <li>${item}</li>`
    });
})