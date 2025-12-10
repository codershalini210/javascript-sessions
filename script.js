const btn1 = document.getElementById("btn1")
btn1.addEventListener("click",()=>
{
    alert("button clicked")
});
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click",()=>
{
    alert("good morning")
    btn2.disabled=true;    
})