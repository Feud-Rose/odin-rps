console.log("Hello World");


//Function called getComputerChoice
//Generate a random number from 1-3


function getComputerChoice() {
   return Math.floor(Math.random()*(3)+1);
}

let comRoll = getComputerChoice()

console.log(comRoll)

//Assign rock paper or scissors based on number selected