// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Function to play a single round
  function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    const playerChoice = playerSelection.toLowerCase();
  
    // Determine the winner
    if (
      (playerChoice === 'rock' && computerSelection === 'scissors') ||
      (playerChoice === 'paper' && computerSelection === 'rock') ||
      (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else if (playerChoice === computerSelection) {
      return `It's a tie! Both chose ${playerChoice}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
  }
  
  // Function to play the game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
      const computerSelection = getComputerChoice();
  
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(`Round ${round}: ${roundResult}`);
  
      // Update scores
      if (roundResult.includes('Win')) {
        playerScore++;
      } else if (roundResult.includes('Lose')) {
        computerScore++;
      }
    }
  
    // Determine the overall winner
    if (playerScore > computerScore) {
      console.log('You are the overall winner!');
    } else if (playerScore < computerScore) {
      console.log('Computer is the overall winner!');
    } else {
      console.log('It\'s a tie! No overall winner.');
    }
  }
  
  // Start the game
  game();
  