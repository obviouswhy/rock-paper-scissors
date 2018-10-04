function computerPlay(){
    let rnd = Math.floor(Math.random() * 3) + 1;
    console.log(rnd);
    let res = "";
    switch (rnd){
        case 1: 
            res ="Rock";
            break;
        case 2:
            res ="Paper";
            break;
        case 3:
            res = "Scissors";
            break 

        default:
            break;    
    }
    //console.log(res);
    return res;
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        console.log("You've introduced a wrong name!");
    }else{
        console.log("Player's Choice = " + playerSelection + "\nComputer's choice = " + computerSelection);
        switch (playerSelection){
            case 'rock':
                switch (computerSelection) {
                    case 'rock':
                        res = "It's a TIE, go again";
                        console.log(res);
                        break;
                    case 'paper':
                        res = "Paper wins Rock... you LOSE!";
                        console.log(res);
                        break;
                    case 'scissors':
                        res = "Rock wins Scissors... you WIN!";
                        console.log(res);
                        break;
                    default:
                        break;
                }
                break;
            case 'paper':
                switch (computerSelection) {
                    case 'rock':
                        res = "Paper wins Rock... you WIN!"
                        console.log(res);
                        break;
                    case 'paper':
                        res = "It's a TIE, go again";
                        console.log(res);
                        break;
                    case 'scissors':
                        res = "Scissors wins Paper... you LOSE!";
                        console.log(res);
                        break;
                    default:
                        break;
                }
                break;
            case 'scissors':
            switch (computerSelection) {
                    case 'rock':
                        res = "Rock wins Scissors... you LOSE!"
                        console.log(res);
                        break;
                    case 'paper':
                        res = "Scissors wins paper... you WIN!";
                        console.log(res);
                        break;
                    case 'scissors':
                        res = "It's a TIE, go again";
                        console.log(res);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        var gameInfo = {
          player:  playerSelection,
          computer: computerSelection,
          message: res
        }
        return gameInfo;
    }
}

 /* funcion for closing the alert */ 

var close = document.getElementsByClassName("closebtn");
var j;

for (j = 0; j < close.length; j++) {
    close[j].onclick = function(){
        closeAll();
    }
}

var alerts = document.getElementsByClassName("alert");

function closeAll(){
        for (let b = 0; b < alerts.length; b++) {
            alerts[b].style.opacity = "0";
            setTimeout(function(){ alerts[b].style.display = "none"; }, 600);  
        }
}