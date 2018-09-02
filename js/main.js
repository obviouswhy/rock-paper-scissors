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
                        console.log("It's a tie, go again");
                        displayResult("It's a tie, go again");
                        break;
                    case 'paper':
                        console.log("Paper wins Rock... you LOSE!");
                        displayResult("Paper wins Rock... you LOSE!");
                        break;
                    case 'scissors':
                        console.log("Rock wins Scissors... you WIN!");
                        displayResult("Rock wins Scissors... you WIN!");
                        break;
                    default:
                        break;
                }
                break;
            case 'paper':
                switch (computerSelection) {
                    case 'rock':
                        console.log("Paper wins Rock... you WIN!");
                        displayResult("Paper wins Rock... you WIN!");
                        break;
                    case 'paper':
                        console.log("It's a tie, go again");
                        displayResult("It's a tie, go again");
                        break;
                    case 'scissors':
                        console.log("Scissors wins Paper... you LOSE!");
                        displayResult("Scissors wins Paper... you LOSE!");
                        break;
                    default:
                        break;
                }
                break;
            case 'scissors':
            switch (computerSelection) {
                    case 'rock':
                        console.log("Rock wins Scissors... you LOSE!");
                        displayResult("Rock wins Scissors... you LOSE!");
                        break;
                    case 'paper':
                        console.log("Scissors wins paper... you WIN!");
                        displayResult("Scissors wins paper... you WIN!");
                        break;
                    case 'scissors':
                        console.log("It's a tie, go again");
                        displayResult("It's a tie, go again");
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        changeLabel(computerSelection + "!");
        changeImgResult(computerSelection.toLowerCase());
    }
}
function displayResult(res){
    document.getElementsByTagName('h1')[0].innerHTML= res;
}
function changeLabel(res){
    document.getElementById("rpsResult").innerHTML=res;
}
function changeImgResult(res){
    var img = document.getElementsByClassName("resultImg");
    //console.log(img[0]);
    switch(res){
        case "Rock".toLowerCase():
            img[0].setAttribute('id','rock');
            break;
        case "Paper".toLowerCase():
            img[0].setAttribute('id','paper');
            break;
        case "Scissors".toLowerCase():
            img[0].setAttribute('id','scissors');
            break;
    } 
}