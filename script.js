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
let comRoll = getComputerChoice()
console.log(comRoll)



//Way for player too select Rock Paper or Scissors
//Convert to all CAPS
let choice = prompt("Please type Rock, Paper or Scissors!", "Type Here");
console.log(choice)
let playerSelection = choice.toUpperCase();
console.log(playerSelection)

//Compare Player and Comp Selections




//Announce Results
