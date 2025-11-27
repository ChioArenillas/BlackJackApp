
let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard 
let thirdCard = 5

let hasBlackJack = false
let isAlive = true

let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") 
let cardsEl = document.getElementById("cards-el")



function startGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
    message = 'Do you want to draw a new card?'
} else if (sum === 21){
    message = 'Woww You have got Blackjac!'
    hasBlackJack = true
} else {
    message = 'You are out of the game!'
    isAlive = false
}
    messageEl.textContent = message
}

function newCard(){
    let card = 5
    sum += card
    startGame()
}

