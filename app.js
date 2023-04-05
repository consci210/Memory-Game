const cardArray = [
    {
        name : 'fries' ,
        img: 'img/fries.png' 
    },
    {
        name : 'cheeseburger' ,
        img: 'img/cheeseburger.png' 
    },
    {
        name : 'hotdog' ,
        img: 'img/hotdog.png' 
    },
    {
        name : 'ice-cream' ,
        img: 'img/ice-cream.png' 
    },
    {
        name : 'milkshake' ,
        img: 'img/milkshake.png' 
    },
    {
        name : 'pizza' ,
        img: 'img/pizza.png' 
    },
    {
        name : 'fries' ,
        img: 'img/fries.png' 
    },
    {
        name : 'cheeseburger' ,
        img: 'img/cheeseburger.png' 
    },
    {
        name : 'hotdog' ,
        img: 'img/hotdog.png' 
    },
    {
        name : 'ice-cream' ,
        img: 'img/ice-cream.png' 
    },
    {
        name : 'milkshake' ,
        img: 'img/milkshake.png' 
    },
    {
        name : 'pizza' ,
        img: 'img/pizza.png' 
    }
  
] ; 

cardArray.sort(()=> 0.5 - Math.random()) ;

const gridDisplay = document.querySelector('#grid') ; 
const promptMessage = document.querySelector('#prompt')
const resultDisplay = document.querySelector('#result')
const reloadButton = document.querySelector('#reload')
let cardsChosen = [] ;
let cardsChosenId = [] ;
const cardsWon = [] ;
 



function createBoard(){
    for (let i = 0 ; i < cardArray.length ; i++ ) {
        const card = document.createElement('img') ;
        card.setAttribute('src' , 'img/blank.png');
        card.setAttribute ('data-id' ,i) ;
        card.addEventListener('click' , flipCard)
        gridDisplay.appendChild(card) ;
    }
}

createBoard() ;

function checkMatch(){
    const cards = document.querySelectorAll('img') ;
    const optionOneId = cardsChosenId[0] ;
    const optionTwoId = cardsChosenId[1] ;

    console.log("check for match")

    if(optionOneId == optionTwoId){
         promptMessage.innerText = 'You have clicked the same image!'
        cards[optionOneId].setAttribute('src', 'img/blank.png')
    }
    else if (cardsChosen[0] == cardsChosen[1]){
        promptMessage.innerText ="Nice , You've a match" ;
        cards[cardsChosenId[0]].setAttribute('src' , 'img/white.png');
        cards[cardsChosenId[1]].setAttribute('src' , 'img/white.png');
        cards[cardsChosenId[0]].removeEventListener('click',flipCard) ;
        cards[cardsChosenId[1]].removeEventListener('click',flipCard) ;
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'img/blank.png')
        cards[optionTwoId].setAttribute('src', 'img/blank.png')
        promptMessage.innerText ="Sorry try again! "
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = [] 
    cardsChosenId = []

    if (cardsWon.length == cardArray.length /2 ){
        resultDisplay.innerHTML = "Congradulations You've found them all  "
        promptMessage.innerText = ""
        reloadButton.style.display = "block" ;
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id') ; 
    cardsChosen.push(cardArray[cardId].name ) ;
    cardsChosenId.push(cardId) ;
    console.log('clicked' , cardId) ;
    console.log(cardsChosen)
    console.log(cardsChosenId) ;
    this.setAttribute('src' , cardArray[cardId].img)
    if (cardsChosen.length === 2 ) {
        setTimeout(checkMatch , 500)
    }
}

reloadButton.addEventListener('click' , ()=> {
    location.reload();
})




