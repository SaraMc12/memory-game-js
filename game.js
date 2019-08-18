const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;

    this.classList.toggle('flip');
    // when first card is clicked

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        // when second card is clicked

    } else {
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();  
    }
}

function checkForMatch(){
 // if the cards are a match

 if (firstCard.dataset.framework === 
    secondCard.dataset.framework) {
   disableCards();
} else {
    // if they dont match
    unflip();
}
}

function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}
function unflip(){
   
    lockBoard = true;
   
    setTimeout(() => {

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 3000);
}
cards.forEach(card => card.addEventListener('click', flipCard));