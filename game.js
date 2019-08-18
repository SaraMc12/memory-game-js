const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard= false;

let firstCard, secondCard;

function flipCard(){
    this.classList.toggle('flip');
    // when first card is clicked
   
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    // when second card is clicked
   
    }else{
        hasFlippedCard = false;
        secondCard= this;
    
    // How to check if the cards are a match
    
       
    
    }
}

cards.forEach(card=> card.addEventListener('click', flipCard));