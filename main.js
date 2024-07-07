var humanScore = 0;
var computerscore = 0;
var start = document.getElementById('start');


function getComputerChoice(){
    var options = ['rock', 'paper', 'scissors'];
    var rand = Math.floor(Math.random()*3);
    console.log(options[rand])
    return options[rand];
    
}
function getHumanChoice(){
    choice = prompt("Rock, paper or scissors?").toLowerCase();
    console.log(choice);
    return choice;

}

function playRound(humanChoice, computerChoice){


        if (humanChoice === 'rock' && computerChoice === "paper"){
            alert("You lose this round! Paper beats Rock");
            computerscore += 1;
        }
        else if(humanChoice === 'paper' && computerChoice === "scissors"){
            alert("You lose this round! Scissors beats Paper");
            computerscore += 1;
        }
        else if(humanChoice === 'scissors' && computerChoice === "rock"){
            alert("You lose this round! Rock beats Scissors");
            computerscore += 1;
        }
        else if(humanChoice === computerChoice){
            alert("Its a draw this round");
            
        }
        else{
            alert("You win this round")
            humanScore += 1;
        }
        
        

}
function playGame(){
   
    let lives = 5;
    while (lives > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        lives -= 1;
    }
    console.log(humanScore)
    console.log(computerscore)
    console.log(lives);
    if (humanScore > computerscore){
        alert("You Win The Game by " + humanScore + " to " +computerscore)
    }
    else if(humanScore === computerscore){
        alert("Its a draw by " + humanScore + " to " +computerscore)
    }
    else{
        alert("Computer Wins The Game by " + computerscore + " to " +humanScore)
 
    }
    }



