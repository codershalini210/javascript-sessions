const questions = document.querySelectorAll(".faq_question")
const answers = document.querySelectorAll(".faq_answer")
questions.forEach((e)=>
{
    e.addEventListener("click",()=>
    {
        answers.forEach((ans)=>
        {
            if(ans !== e.nextElementSibling)
            {
            ans.classList.add("hidden")
            }
        })
     e.nextElementSibling.classList.toggle("hidden")
    })
})
