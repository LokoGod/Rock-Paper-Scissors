const getComputerChoice = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[(Math.floor(Math.random() * options.length))]
}

const playRound = (playerSelection, computerSelection) = () => {

}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));