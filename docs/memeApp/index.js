const memeImage = document.querySelector('img')
const memeBut = document.querySelector('.memeBut')

memeBut.addEventListener('click', generateMeme)

 async function generateMeme() {
  apiUrl ='https://meme-api.com/gimme'
  const response = await fetch(apiUrl)
  const data = await response.json()
  designator(data.url)
}

function designator(url){
  memeImage.setAttribute('src',url)
}
generateMeme()