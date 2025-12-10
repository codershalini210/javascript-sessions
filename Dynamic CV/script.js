
  const person_name = document.getElementById("person_name")
  const contact_info = document.getElementById("contact_info")
  const skills_list = document.getElementById("skills_list")
  const profile_picture = document.getElementById("profile_picture")
  const show_skills_btn = document.getElementById("show_skills_btn")
  const intro = document.getElementById("intro")
  intro.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget erat urna. Cras eleifend mauris nibh, sit amet convallis nulla porta eget. In vitae fringilla orci, et commodo sapien. Sed feugiat pharetra arcu in mattis. Nam eget ante eget est faucibus ornare sit amet sit amet justo. Integer placerat ligula vel neque volutpat facilisis. Praesent accumsan ante quam, ac sodales dui cursus ac. Sed tincidunt elit orci, suscipit cursus ante lobortis vel. Sed vehicula risus eu u"
person_name.innerText = "John Doe"
contact_info.innerHTML = ` Email : <a href="mailto:john.doe@gmail.com">
john.doe@gmail.com</a><br>
Phone: 1236547890`
profile_picture.setAttribute('src','../images/boy1.png')
let skills = ['HTML','CSS','Javascript','Jquery','TAilwind','Python']
show_skills_btn.addEventListener("click",()=>
{
    skills_list.innerHTML=""
    skills.forEach(skill=>
    {
        let li = document.createElement("li")
        li.innerText = skill
        skills_list.appendChild(li)
    }
    )
})

