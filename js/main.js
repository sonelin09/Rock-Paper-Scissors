function computerPlay() {
    let onetwothree = Math.round(Math.random()*2);
    const pst = ["paper", "scissors", "rock"];
    let comPlay = pst[onetwothree];
    return comPlay;
}

const playerSelection = prompt("出拳吧paper、scissors、rock", "");
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    let outcome;
    if (playerSelection === computerSelection){
        outcome = "平手";
    }else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            outcome = "你輸惹";
        }else{
            outcome = "你贏了";
        }
    }else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            outcome = "你輸惹";
        }else{
            outcome = "你贏了";
        }
    }else if (playerSelection === "rock") {
        if (computerSelection === "paper"){
            outcome = "你輸惹";
        }else{
            outcome = "你贏了";
        }
    }else{
        outcome = "請出正確的拳";
    }
    
    return outcome;
    
}


console.log("玩家出拳:" + playerSelection);
console.log("電腦出拳:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));

