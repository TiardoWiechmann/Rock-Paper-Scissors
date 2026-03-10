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
        return `It's a tie! Both chose ${humanChoice}`;
    }
    // All cases where human wins
    // rock beats scissor, scissor beats paper, paper beats rock
    else if ( (humanChoice == "rock" && computerChoice == "scissors") || 
                (humanChoice == "scissors" && computerChoice == "paper") ||
                (humanChoice == "paper" && computerChoice == "rock") ){
        humanScore += 1;
        return "You win! Rock beats Paper";
    }
    // Computer wins
    else {
        computerScore += 1;
        return `You loose! ${computerChoice} beats ${humanChoice}`;
    }
}


// Play game 5 times
function playGame(){
    let humanSelection;
    let computerSelection;

    const buttons = document.querySelectorAll("button");

    const body = document.querySelector("body");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (humanScore >= 5 || computerScore >= 5){
                computerScore = 0;
                humanScore = 0;
                const divsRes = document.querySelectorAll("div");
                divsRes.forEach((divRes) => {
                    divRes.remove();
                })
            }
            humanSelection = button.textContent.toLowerCase();
            computerSelection = getComputerChoice();
            let resultOfRound = playRound(humanSelection, computerSelection);
            const divRound = document.createElement("div");
            divRound.textContent = resultOfRound;
            body.appendChild(divRound); 
            
            const currentScore = document.createElement("div");
            currentScore.textContent = `You: ${humanScore},\t Computer: ${computerScore}`;
            body.appendChild(currentScore);

            // Declare Winner
            if(humanScore >= 5 || computerScore >= 5){
                let result;
                if (computerScore > humanScore) result = `Computer wins with ${computerScore} to ${humanScore}!`;

                else if (humanScore > computerScore) result = `You win with ${humanScore} to ${computerScore}!`;
                else result = `It's a tie! Both have ${humanScore} wins.`;

                const div = document.createElement("div");
                div.textContent = result;
                body.appendChild(div);
            }
        })
    })
}

let humanScore = 0;
let computerScore = 0;
playGame();