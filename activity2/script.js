
const address_form =document.querySelector("#address_form")
const postcodeInput = document.querySelector("#txtpostcode")
const errorMsg = document.querySelector("#postcode_error")
const postcodes_list = document.querySelector("#postcodes_list")
const ary_postcode = []
const postcodeRegex = /^[A-Z]{1,2}\d[A-Z]\d? \d[A-Z]{2}$/i;


address_form.addEventListener("submit",(event)=>
{
    event.preventDefault()
    let postcode = postcodeInput.value.trim()
if(!postcodeRegex.test(postcode))
{
    //validation fails
    errorMsg.innerHTML = "Please  enter valid post code"
    errorMsg.style.color = "red"
}
else
{
    if(ary_postcode.findIndex((e)=>e==postcode) !=-1)
    {
    errorMsg.innerHTML = " post code already present"
        return
    }
    errorMsg.innerHTML = " valid input -> we will pass it to server"
    errorMsg.style.color="green"
    ary_postcode.push(postcode)
    postcodes_list.innerHTML = ""
    ary_postcode.forEach(e=>
    {
        let li = document.createElement("li")
        li.innerHTML= e
        postcodes_list.appendChild(li)
    }
    )
}
})