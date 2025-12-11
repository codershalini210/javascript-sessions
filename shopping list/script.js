const btnadd = document.querySelector("#btnadd")
const list_item = document.querySelector("#item_list")
const txtitem = document.querySelector("#txtitem")
btnadd.addEventListener("click",()=>
{
    let item = txtitem.value 
    if(item=="")
    {
        alert("enter item ")
    }
    else
    {
        let li = document.createElement("li")
        li.innerText = item
        list_item.appendChild(li)
        txtitem.value = ""
        txtitem.focus()
    }
})