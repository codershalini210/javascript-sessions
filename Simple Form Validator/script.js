
    // <form id="form-user">
    //     <label for="txtname">Name</label>
    //     <input type="text" id="txtname">
    //     <div id="d_err"></div>
    const form_user = document.getElementById("form-user")
    const txtname = document.getElementById("txtname")
    const d_err = document.getElementById("d_err")
    const d_msg = document.getElementById("d_msg")
    form_user.addEventListener("submit",(event)=>
    {
        let name = txtname.value
        event.preventDefault();
        if(name=="")
        {
            d_err.innerText = "Please Enter name "
            return 
        }
        d_msg.innerText = "hello "+name
        d_err.innerText=""
        console.log("hello "+ name)
    })