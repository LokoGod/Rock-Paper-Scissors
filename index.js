// Function to get computer choice
const getComputerChoice = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[(Math.floor(Math.random() * options.length))]
}

// Function to play a single round
const playRound = (playerSelection, computerSelection) = () => {
    // Make playerSelection case-insensitive
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        return "It's a tie!"
    } else if ((playerChoice === 'Rock' && computerSelection === 'Scissors') ||
     (playerChoice === 'Paper' && computerSelection === 'Rock') ||
      (playerChoice === 'Scissors' && computerSelection === 'Paper')) {
        return `You win! ${playerChoice} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerChoice}`
    }
}

const game = () => {
    
}


const playerSelection = 'rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));
