const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay =document.getElementById('result')
const possibleChoices=document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1
    console.log(randomNumber)

    if(randomNumber==1){
        computerChoice='rock'
    }
    else if(randomNumber==2){
        computerChoice='scissor'
    }
    else if(randomNumber==3){
        computerChoice='paper'
    }
    computerChoiceDisplay.innerHTML=computerChoice
}

function getResult(){
    if(computerChoice==userChoice){
        result='DRAW'
    }
    else if(userChoice=='rock' &&computerChoice=='scissor'){
        result='win'
    }
    else if(userChoice=='scissor' &&computerChoice=='paper'){
        result='win'
    }
    else if(userChoice=='paper' &&computerChoice=='rock'){
        result='win'
    }
    else{
        result='lost'
    }

    resultDisplay.innerHTML=result
}

