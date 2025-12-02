
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let thirdCard = 5

let hasBlackJack = false
let isAlive = true

let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") 
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    return Math.random()
}

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " "
    }
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

