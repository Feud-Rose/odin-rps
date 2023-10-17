console.log("Hello World");


//Function called getComputerChoice
//Generate a random number from 1-3
function getComputerChoice() {
  let ranNum = Math.floor(Math.random()*(3)+1);
    console.log(ranNum) 
    //Assign rock paper or scissors based on number selected
    if (ranNum === 1) {
        return "Rock"
    }
    else if (ranNum === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

//Keep track of a bo5
let rounds = 0;
//Score
let playerPoints = 0;
let computerPoints = 0;
let buttons = document.querySelector('.pick');
const score = document.querySelector('p');
let div = document.querySelector('div');

buttons.addEventListener('click', function(e) {
    let playerSelection = e.target.innerText
    console.log(playerSelection)
    let computerSelection = getComputerChoice()
    console.log(computerSelection)
    console.log(rounds)
    if (rounds === 5) {
        if (playerPoints > computerPoints) {
            div.textContent = ('You Win! ' + playerPoints + ' to ' + computerPoints + '.');
            } 
        else if (playerPoints < computerPoints) {
            div.textContent = ('You Lose! ' + computerPoints+ ' to ' + playerPoints + '.');
            } 
        else {
            div.textContent =  'It was a Draw, you won the same amount of rounds.';
            }           
    
        }    
        else {
            
            let divResults = (playGame(playerSelection, computerSelection,));
            console.log(divResults)
            div.textContent = divResults;
            score.textContent = "Player: " + playerPoints + ", Computer: " + computerPoints + ", Rounds Played: " + rounds + "."
        //Compare Player and Comp Selection
        function playGame(playerSelection, computerSelection,) {
            ++rounds
            if (playerSelection === "Rock") {
                if (computerSelection === "Rock") {
                return "Draw you both picked " + computerSelection + ".";
                }
                else if (computerSelection === "Paper") {
                ++computerPoints;
                return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
                }
                else {
                ++playerPoints;
                return "You Win! " + playerSelection + " beats " + computerSelection + ".";
                }
            }
            else if (playerSelection === "Paper") {
                if (computerSelection === "Rock") {
                ++playerPoints;
                return "You Win! " + playerSelection + " beats " + computerSelection + ".";
                }
                else if (computerSelection === "Paper") {
                return "Draw you both picked " + computerSelection + "."
                }
                else {
                ++computerPoints;
                return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
                }
            }
            else if (playerSelection === "Scissors") {
                if (computerSelection === "Rock") {
                ++computerPoints;
                return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
                }
                else if (computerSelection === "Paper") {
                ++playerPoints;
                return "You Win! " + playerSelection + " beats " + computerSelection + ".";
                }
                else {
                return "Draw you both picked " + computerSelection + "."
                }
            }
            else {
                return playerSelection + " is not a valid choice.";
            }

 
   
        } 
        }
        
       
        
        
 
    
        
   


    
});
 // for(let i = 0; i < 5; i++) { }
//let results = game()
//console.log(results)
//console.log(game(playerSelection, computerSelection));
//computerSelection
//Announce Results
