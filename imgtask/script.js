//  id="btnhide">
//     <input type="button" value="show" id="btnshow">
//     <img src="../images/boy1.png" id="img1" 
let  img1 = document.getElementById("img1")
let btnhide = document.getElementById("btnhide")
let btnshow = document.getElementById("btnshow")
btnshow.addEventListener("click",()=>
{
    img1.style.visibility = "visible"
    btnhide.style.visibility = "visible"
    btnshow.style.visibility = "hidden"
})
btnhide.addEventListener("click",()=>
{
    img1.style.visibility = "hidden"
    btnhide.style.visibility = "hidden"
    btnshow.style.visibility = "visible"
})