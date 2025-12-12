let thumbnail_container = document.getElementById("thumbnail_container")
let main_image = document.getElementById("main_image")
thumbnail_container.addEventListener("click",(event)=>
{
   main_image.src = event.target.src  
})
