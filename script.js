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

//Assign rock paper or scissors based on number selected