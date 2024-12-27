const items = document.querySelectorAll(".faq-item")
const showHidden = document.querySelector(".show-hidden")
const faqContainer = document.querySelector(".faq-container")
const personalBlog = document.querySelector(".personal-blog")

let currState = "unactivated"
items.forEach(item => {
  item.addEventListener("click", (e)=>{
    e.preventDefault()

    if(currState === "activated" && item.querySelector(".show").innerHTML === "+"){

        item.querySelector(".faq-answer").classList.toggle("open")
        item.querySelector(".show").innerHTML = "-"
        currState = "activated"

      }else if(currState === "unactivated" && item.querySelector(".show").innerHTML === "-"){

          item.querySelector(".faq-answer").classList.toggle("open")
          item.querySelector(".show").innerHTML = "+"

          currState = "unactivated"
      }else if(currState == "unactivated"){
      
        item.querySelector(".faq-answer").classList.toggle("open")
  
        item.querySelector(".show").innerHTML = "-"
  
        currState = "activated"      
      }else {
        if(currState === "activated"){

          item.querySelector(".faq-answer").classList.toggle("open")
          item.querySelector(".show").innerHTML = "+"
          currState = "unactivated"
      }
    }
  
  })
})

/*responsive small screens*/
let currstate = "not clicked"

  showHidden.addEventListener("click",(e)=>{
  e.preventDefault()
  if( currstate === "not clicked"){
    faqContainer.style.display = "block"
    personalBlog.style.display = "none"
    currstate = "clicked"
    showHidden.innerHTML = "<"
  }else{
    if(currstate === "clicked"){
      faqContainer.style.display = "none"
      personalBlog.style.display = "block"
      currstate = "not clicked"
      showHidden.innerHTML = ">"
    }
  }
 

})

