const slider = document.querySelector(".slider")
const projects = document.querySelector(".projects")
const items = document.querySelectorAll(".items")
const search = document.querySelector("#search-projects")
const searchIcon = document.querySelector(".search-icon")
const forward = document.querySelector(".forward")
const back = document.querySelector(".back")
const showHidden = document.querySelector(".show-hidden")
const projectPage = document.querySelector(".project-page")
const personalBlog = document.querySelector(".personal-blog")

/*items slider*/
let left = 0
const slideleft = () =>{
  slider.style.left = -left++ + "%"
  if(left === 100){
    left = -20
    slider.style.right = -left++ + "%"
  }
}
let timer = setInterval(slideleft,100)

const shiftFoward = () =>{
  slider.style.left = -40 + "%"
  if(left === 100){
    left = 100
    slider.style.right = -left++ + "px"
  }
}
const shiftBack = () =>{
   slider.style.left = left++ + "px"
   if(left === 100){
    left = 0
    slider.style.right = left++ + "px"
  }
}

forward.addEventListener("mouseover",(e)=>{
  e.preventDefault()
  shiftFoward()
})
back.addEventListener("mouseover",(e)=>{
  e.preventDefault()
  shiftBack()
})
/*search*/

searchIcon.addEventListener("click",(e) =>{
  e.preventDefault()
  if(search.value === "")return
  items.forEach(item => {
    
    if(item.textContent.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())){
      item.classList.remove("hidden")
    }else{
      item.classList.add("hidden")
    }
  })
  clearInterval(timer)
  slider.style.left = 0 + "%"
})

/*responsive small screens*/
let currstate = "not clicked"

showHidden.addEventListener("click",(e)=>{
  e.preventDefault()
  if( currstate === "not clicked"){
    projectPage.style.display = "block"
    personalBlog.style.display = "none"
    currstate = "clicked"
    showHidden.innerHTML = "<"
  }else{
    if(currstate === "clicked"){
      projectPage.style.display = "none"
      personalBlog.style.display = "block"
      currstate = "not clicked"
      showHidden.innerHTML = ">"
    }
  }
 

})



