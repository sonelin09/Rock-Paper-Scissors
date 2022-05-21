//電腦出拳
function computerPlay() {
    let onetwothree = Math.round(Math.random()*2);
    const pst = ["paper", "scissors", "rock"];
    let comPlay = pst[onetwothree];
    return comPlay;
}

//玩家選擇鈕
const body = document.querySelector('#body');
const btnRock = document.createElement('button');
btnRock.setAttribute("class", "buttons");
const btnPaper = document.createElement('button');
btnPaper.setAttribute("class", "buttons");
const btnScissors = document.createElement('button');
btnScissors.setAttribute("class", "buttons");
//const btns = document.querySelectorAll('button');//取所有按鈕

btnRock.textContent = "Rock";
body.appendChild(btnRock);
btnPaper.textContent = "Papper";
body.appendChild(btnPaper);
btnScissors.textContent = "Scissors";
body.appendChild(btnScissors);



//一開始寫的時候玩家出拳跟電腦出拳的變數寫在全域，但這樣後續在函數裡連續呼叫playRound時並不會重取新的拳，
//因為只有建立變數時會執行取新拳的函式
/*let playerSelection = prompt("出拳吧paper、scissors、rock", "");
let computerSelection = computerPlay();*/

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

function game() {
    let win = 0;
    let lose = 0;
    let tie = 0;
    let wrong = 0;
    
}


//console.log(game());

/*console.log("玩家出拳:" + playerSelection);
console.log("電腦出拳:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

