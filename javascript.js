// Returns randomly "rock", "paper" or "scissors"
function getComputerChoice(){
    const rock = 1;
    const paper = 2;
    const scissors = 3

    const x = Math.floor(Math.random() * 3) + 1;

    switch (x) {
        case rock:
            return "rock";
        case paper:
            return "paper";
        case scissors:
            return "scissors";     
    }
}


// Input: String vom User (rock, paper, scissors), assume user enters valid choice
// Output: User's choice
function getHumanChoice(){
    let choice = prompt("Your turn: ");
    return choice.toLowerCase();
}


// Input: human choice and computer choice
// Increment the round winner's score and log a winner announcement
function playRound(humanChoice, computerChoice){
    // tie, if same choice
    if (humanChoice == computerChoice){
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    }
    // All case where human wins
    // rock beats scissor, scissor beats paper, paper beats rock
    else if ( (humanChoice == "rock" && computerChoice == "scissors") || 
                (humanChoice == "scissor" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "rock") ){
        console.log("You win! Rock beats Paper");
        humanScore += 1;
    }
    // Computer wins
    else {
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}


// Play game 5 times
function playGame(){
    let humanSelection;
    let computerSelection;

    for(let i=0; i<5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    
    // Declare Winner
    if (computerScore > humanScore)console.log(`Computer wins with ${computerScore} to ${humanScore}!`);
    
    else if (humanScore > computerScore) console.log(`You win with ${humanScore} to ${computerScore}!`);
    else console.log(`It's a tie! Both have ${humanScore} wins.`);
}

let humanScore = 0;
let computerScore = 0;
playGame();