const addItem = document.querySelector("#addItem")
const sortItem = document.querySelector("#sortItem")
const listInput = document.querySelector("#listItem")
const output = document.querySelector("#item-List")

let itemList = []
addItem.addEventListener("click",(e)=>{
    if(listInput.value){
        itemList.push(listInput.value)
        listInput.value = ""
    }else{
        listInput.style = "outline:3px solid red"
    }
    // set local storage
    localStorage.setItem("items",JSON.stringify(itemList))
})
