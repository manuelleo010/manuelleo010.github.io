const accessKey ='ZzI-i4OIGCWYqzs6X43GCSAzbA99-GpBBr2SEJuqvpE' 

const container = document.getElementById('container')
const searchInput  = document.getElementById('search-input')
const form = document.querySelector('form')
const more = document.getElementById('more')
let keywords = ''
let page = 1
async function fetchingImages(){
  if(page === 1){
    container.innerHTML = ''
  }
  keywords = searchInput.value
  const apiUrl= `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${keywords}&page=${page}`
  const response = await fetch(apiUrl)
  const data = await response.json()
  const results = data.results

  results.forEach(result => {
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')
    const image = document.createElement('img')
    image.src = result.urls.regular
    image.alt = result.alt_description
    const link = document.createElement('a')
    link.href = result.links.html
    link.textContent = result.alt_description
    link.target = '_blank'

    imageContainer.appendChild(image)
    imageContainer.appendChild(link)
    container.appendChild(imageContainer)
    imageContainer.appendChild(link)
  })
  if(page > 1){
    more.style.display = 'block'
  }
  page++
}
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  page = 1
  fetchingImages()
})
more.addEventListener('click',(e)=>{
  fetchingImages()
})
