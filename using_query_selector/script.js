const btnshowcontent = document.querySelector("#btnshowcontent")
const container = document.querySelector("#container")
btnshowcontent.addEventListener("click",()=>
{
    container.innerHTML= `<h2>Welcome </h2> <p>THis content 
    comes from js </p> <h3>Thank you visit again </h3>`
    container.classList.add('bg-orange')
    container.classList.add("square")
})
// const txtmovie = document.querySelector("#movie-search-box") 
// txtmovie.addEventListener("focus",()=>
// {
//     txtmovie.style.backgroundColor = "yellow"
// })
// txtmovie.addEventListener("blur",()=>
// {
//     txtmovie.style.backgroundColor = "white"
// })