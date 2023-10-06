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





//Way for player too select Rock Paper or Scissors
//Convert to all CAPS


//Keep track of a bo5
let rounds = 0;
function game() {
    //Score
    let playerPoints = 0;
    let computerPoints = 0;
    

    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice()
        console.log(computerSelection)
        let choice = prompt("Please type Rock, Paper or Scissors!", "Type Here");
        console.log(choice)
        let playerSelection = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
        console.log(playerSelection)
        ++rounds
        console.log(rounds)
        //Compare Player and Comp Selections

        function playGame(playerSelection, computerSelection,) {
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
        console.log(playGame(playerSelection, computerSelection,));
    }
    if (rounds === 5) {
        if (playerPoints > computerPoints) {
            return ('You Win! ' + playerPoints + ' to ' + computerPoints + '.');
        } else if (playerPoints < computerPoints) {
            return ('You Lose! ' + computerPoints+ ' to ' + playerPoints + '.');
        } else {
            return 'It was a Draw, you won the same amount of rounds.';
        }   
    } 
    }

let results = game()
console.log(results)
//console.log(game(playerSelection, computerSelection));
//computerSelection
//Announce Results
