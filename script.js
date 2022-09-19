function getComputerChoice() {
    let allOptions = ["rock","paper","scissors"] ;
    let computerChoice = allOptions[Math.floor(Math.random()*allOptions.length)];
   return computerChoice
}
function getResult(playerChoice, computerChoice) {
    let score ;
    if (playerChoice === computerChoice){score= 0}
   else if ((playerChoice==="rock" && computerChoice==="scissors") || (playerChoice==="scissors" && computerChoice==="paper") || (playerChoice==="paper" && computerChoice==="rock")) {score=1}
    else { score = -1}
  return score ;
}
    
function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById("result")
       switch (score) {
     case -1 :
     result.innerText =`You lose!`
       break ;
     case 0 : 
       result.innerText = ` Draw `
       break ;
     case 1 :
       result.innerText = `You win!`
       break;  
   }
 
   
   let playerScore = document.getElementById('player-score')
   let hands = document.getElementById('hands')
   playerScore.innerText = `${Number(playerScore.innerText) + score}`
     hands.innerText = `👱 ${playerChoice} vs  ${computerChoice} 🤖 `
 
}
 
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
   showResult(score, playerChoice.value, computerChoice)
}

 function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')
 
   rpsButtons.forEach(rpsButton => {
     rpsButton.onclick = () => onClickRPS(rpsButton)
   })
    let endGameButton = document.getElementById('endGameButton')
   endGameButton.onclick = () => endGame()
}
 
 function endGame() {
   
   let playerScore = document.getElementById('player-score')
   let hands = document.getElementById('hands')
   let result = document.getElementById('result')
   playerScore.innerText = ''
   hands.innerText = ''
   result.innerText = ''
}

 playGame()
 