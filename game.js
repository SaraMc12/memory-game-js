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
    
    // if the cards are a match
    
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }else{
        // if they dont match
        setTimeout(() => {
            
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
    }, 3000);
    }
       
    
    }
}

cards.forEach(card=> card.addEventListener('click', flipCard));