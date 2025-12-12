const txtsearch = document.getElementById("txtsearch")
const book_list = document.getElementById("book_list")
const book_items = document.querySelectorAll(".book_item")
txtsearch.addEventListener("keyup",()=>
{
    const value = txtsearch.value.toLowerCase()
    console.log(value)
    book_items.forEach((book)=>
    {
        const title = book.innerText.toLowerCase()
        if(title.includes(value))
        {
            book.style.display="block"

        }
        else{
            book.style.display = "none"
        }
    })
})