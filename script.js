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
let computerSelection = getComputerChoice()
console.log(computerSelection)



//Way for player too select Rock Paper or Scissors
//Convert to all CAPS
let choice = prompt("Please type Rock, Paper or Scissors!", "Type Here");
console.log(choice)
let playerSelection = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
console.log(playerSelection)

//Compare Player and Comp Selections

function playGame(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
        return "Draw you both picked " + computerSelection + ".";
        }
        else if (computerSelection === "Paper") {
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        }
        else {
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
        }
        else if (computerSelection === "Paper") {
        return "Draw you both picked " + computerSelection + "."
        }
        else {
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        }
        else if (computerSelection === "Paper") {
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
console.log(playGame(playerSelection, computerSelection));
//computerSelection
//Announce Results
