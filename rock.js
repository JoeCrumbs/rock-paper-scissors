//  create Array of possible Values 
const PLAY_OPTIONS = ['Rock', 'Paper', 'Scissors'];

function capitalizeFirstLetter(string) {
    return string.slice(0,1).toUpperCase() + string.slice(1).toLowerCase();
}

function computerPlay() {
    // create random index of Play-Options Array
    let computerChoice = Math.floor(Math.random() * 3);
    // return computer Choice with random index
    return PLAY_OPTIONS[computerChoice];
}

function getUserWeapon() {
    //prompt user for weapon of choice and check for typos
    let userChoice = capitalizeFirstLetter(prompt('Please choose your Weapon (only rock, paper or scissors)!'));
    if (PLAY_OPTIONS.indexOf(userChoice) > -1) {
        return userChoice;
    } else {
        // if typo ask again
        getUserWeapon();
    }
}

//evaluate Winner of Round
function playRound(playerSelection, computerSelection) {
    // get Index of weapons from PLAY_OPTIONS
    playerSelectionIndex = PLAY_OPTIONS.indexOf(playerSelection);
    computerSelectionIndex = PLAY_OPTIONS.indexOf(computerSelection);

    /* short evaluation: next element alway wins over last, use modulo to evaluate place in sequence
    use +1 to avoid 0 and with result of (x + 1) % 3 === y y will win */
    if ((computerSelectionIndex + 1) % 3 === playerSelectionIndex) {
        return 'player';
    } else if ((playerSelectionIndex + 1) % 3 === computerSelectionIndex) {
        return 'computer';
    } else {
        return 'draw';
    }
    /* Long Evaluation with if else
    if ( playerSelection === computerSelection) {
        return 'It`s a Draw! Try Again!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors!';
        } else {
            return 'You Lose! Paper beats Rock!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock!';
        } else {
            return 'You Lose! Scissors beats Paper!';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper!';
        } else {
            return 'You Lose! Rock beats Scissors!';
        }
    }
    */
}

function game() {
    //initialize necessary variables
    let playerSelection = '';
    let computerSelection = '';
    let winnerOfRound = '';
    let playerScore = 0;
    let computerScore = 0;
    //Startconole Group for new Game
    console.group("Start a Game of Rock Paper Scissors!");
    for (let round = 1; round < 6; round++) {
        //get weapons
        playerSelection = getUserWeapon();
        computerSelection = computerPlay();
        //evaluate winner of round
        winnerOfRound = playRound(playerSelection, computerSelection);
        //console.log winner of round and keep track of score
        switch(winnerOfRound) {
            case 'player': {
                console.log(`Round ${round}: You Win! ${playerSelection} beats ${computerSelection}!`);
                playerScore += 1;
                break;
            }
            case 'computer': {
                console.log(`Round ${round}: You Lose! ${computerSelection} beats ${playerSelection}!`);
                computerScore += 1;
                break;
            }
            default: {
                console.log(`Round ${round}: Its a Draw! Try Again!`);
                break;
            }
        }
    }

    //evaluate winner or match
    if (playerScore > computerScore) {
        console.log(`%cEndresult: You Win! ${playerScore}:${computerScore}!`, `color: green`);
    } else if (playerScore < computerScore) {
        console.log(`%cEndresult: You Lose! ${playerScore}:${computerScore}!`, `color: red`);
    } else {
        console.log(`%cEndresult: It's a Draw! ${playerScore}:${computerScore}!`, `color: orange`);
    }
    console.groupEnd();
}