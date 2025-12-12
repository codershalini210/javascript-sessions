
    const form_user = document.getElementById("form-user")
    const txtpassword = document.getElementById("txtpassword")
    const txtRepassword = document.getElementById("txtRepassword")
    const d_msg = document.getElementById("d_msg")
form_user.addEventListener("submit",(event)=>
{
    event.preventDefault()
    if(txtpassword.value == "" || txtRepassword.value=="")
    {
        d_msg.innerText = "Please enter values in both fields"
        d_msg.style.color="red"
    }
    else
    {
        if(txtpassword.value == txtRepassword.value)
        {
            d_msg.innerText = "Password changed successfully"
            d_msg.style.color="green"
            txtRepassword.value=""
            txtpassword.value=""
        }
        else
        {
            d_msg.innerText = "Please enter same values in both the fields"
            d_msg.style.color = "red"
        }
    }
})