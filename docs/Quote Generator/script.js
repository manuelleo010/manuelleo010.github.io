const quote = document.querySelector('#quote')
const aurthor = document.querySelector('.aurthor')
const button = document.querySelector('#q-button')
const image = document.querySelector('img')


const quotePack = [
  {'quote':'"The way to communicate with others and with ourselves ultimately determines the quality of our lives."',
    'aurthor':'Tony Robbins',
    'image' : 'public/robbins.jpg'
  },
  {'quote':'"To handle yourself, use your head; to handle others, use your heart."',
    'aurthor':'Eleanor Roosevelt',
    'image' : 'public/roosevelt.jpg'

  },
  {
    'quote':'"Excellence is not a skill. It is an attittude."',
    'aurthor' : 'Ralp Marston',
    'image' : 'public/Ralph.jpg'

  },
  {
    'quote':'"Strive not to be a success, but rather to be a value."',
    'aurthor' : 'Albert Einstein',
    'image' : 'public/Einsteine.jpg'

  }
]

const createQuote = () =>{

  let random = Math.floor(Math.random()* quotePack.length )

  let quotes = quotePack[random]

  quote.textContent = quotes.quote
  aurthor.textContent = quotes.aurthor
  image.setAttribute('src', quotes.image)
 
}


button.addEventListener('click', createQuote)
