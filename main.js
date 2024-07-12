var humanScore = document.getElementById('human');
var computerscore = document.getElementById('computer')
humanScore.innerText = 0;
computerscore.innerText = 0;

function restart(){
    computerscore.innerText = 0;
    humanScore.innerText = 0;
}



function getComputerChoice(){
    var options = ['rock', 'paper', 'scissors'];
    var rand = Math.floor(Math.random()*3);
    console.log(options[rand])
    return options[rand];
    
}
function play(){
    if (computerscore.innerText === 5){
        playGame()
    }
}

function playGame(choice){
    const computerChoice = getComputerChoice();
    if (choice === 'rock' && computerChoice === "paper"){
        alert("You lose this round! Paper beats Rock");
        computerscore.innerText = parseInt(computerscore.innerText) +1;
        if (parseInt(computerscore.innerText) === 5){
            alert('The computer Wins This Game ');
            restart()
        }
      
    }
    else if(choice === 'paper' && computerChoice === "scissors"){
        alert("You lose this round! Scissors beats Paper");
        computerscore.innerText = parseInt(computerscore.innerText) +1;
        if (parseInt(computerscore.innerText) === 5){
            alert('The computer Wins This Game');
            restart()
        }
    }
    else if(choice === 'scissors' && computerChoice === "rock"){
        alert("You lose this round! Rock beats Scissors");
        computerscore.innerText = parseInt(computerscore.innerText) +1;
        if (parseInt(computerscore.innerText) === 5){
            alert('The computer Wins this Game ');
            restart()
        }
    }
    else if(choice === 'rock' && computerChoice === "scissors"){
        alert("You win this round! Rock beats Scissors");
        humanScore.innerText = parseInt(humanScore.innerText) +1;
        if (parseInt(humanScore.innerText) === 5){
            alert('You Win This Game ');
            restart()
        }
    
    }
    else if(choice === 'scissors' && computerChoice === "paper"){
        alert("You win this round! Scissors beats Paper");
        humanScore.innerText = parseInt(humanScore.innerText) +1;
        if (parseInt(humanScore.innerText) === 5){
            alert('You Win This Game ');
            restart()
        }
  
    }
    else if(choice === 'paper' && computerChoice === "rock"){
        alert("You win this round! Paper beats Rock");
        humanScore.innerText = parseInt(humanScore.innerText) +1;
        if (parseInt(humanScore.innerText) === 5){
            alert('You Win This Game');
            restart()
        }
        
    }
    
    else if(choice === computerChoice){
        alert("Its a draw this round");
        
    }
    
}


