
let player={
     name : "Hiruni",
     chips : 105
}
let sum = 0
let cards = []
let hasJackBlack=false
let isAlive=false
let message=""
console.log(sum)

let cardEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function renderGame(){
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<=20){
        message="Do you want to draw a new card?🙂"
    }else if(sum===21){
        message="woohoo!! You've got blackjack!🥳"
        hasJackBlack=true
    }else if(sum>21){
        message="You're out of the game! 😭"
        isAlive=false
    }
    messageEl.innerText=message
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard =  getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function getRandomCard(){
    let rand = Math.floor(Math.random() * 13) + 1
    if(rand===1){
       return 11
    }else if(rand>10){
        return 10
    }else{
        return rand
    }
}
function newCard(){
    if(isAlive===true && hasJackBlack===false){
    console.log("Drawing new card")
    let card = getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()
}
}




