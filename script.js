let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");
let result_text = document.getElementById("result");
let playerScore_text = document.getElementById("playerPoint")
let computerScore_text = document.getElementById("computerPoint")

    function computerPlay() {
        let choice = ["rock", "paper", "scissors"];
        return choice [Math.floor(Math.random() * choice.length)];
    }

    function playerPoint() {
        playerScore++
        playerScore_text.innerHTML = playerScore;
        if (playerScore === 5){
            alert("Ganaste! Se va a reiniciar el juego!")
            location.reload();
        } else {
        return playerScore;
        }
    }

    function computerPoint() {
        computerScore++
        computerScore_text.innerHTML = computerScore;
        if (computerScore === 5) {
            alert("Computer wins this series!  Page will reload to try again!");
            location.reload();
        } else {
        return computerScore;
        }
    }

    function playRound(playerSelection) {
        let computerSelection = computerPlay();
    if (computerSelection === playerSelection) {
        result_text.innerHTML = ("Tie! Try again!")
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        result_text.innerHTML = ("You Win! Paper beats Rock!")
        playerPoint();
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        result_text.innerHTML = ("You win! Scissors beats Paper!")
        playerPoint();
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        result_text.innerHTML = ("You win! Rock beats Scissors!")
        playerPoint();
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        result_text.innerHTML = ("You lose! Rock beats Scissors!")
        computerPoint();
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        result_text.innerHTML = ("You lose! Paper beats Rock!")
        computerPoint();
    } else {
        result_text.innerHTML = ("You lose! Scissors beats Paper!")
        computerPoint();
    }
} 

function main() {
    rock_div.addEventListener("click", function(){
        playRound("rock")
    })
    
    paper_div.addEventListener("click", function(){
        playRound("paper")
    })
    
    scissors_div.addEventListener("click", function(){
        playRound("scissors")
    })
    }

    main();

let computerScore = 0;
let playerScore = 0;