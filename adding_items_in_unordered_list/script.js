const btnadd = document.getElementById("btnadd")
const fruit_list =document.getElementById("fruit_list")
btnadd.addEventListener("click",addhandler)

function addhandler()
{
    let li = document.createElement("li")
    li.innerHTML = "NEW FRUIT"
    fruit_list.append(li)
}