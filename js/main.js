//電腦出拳
function computerPlay() {
    let onetwothree = Math.round(Math.random()*2);
    const pst = ["剪刀", "石頭", "布"];
    let comPlay = pst[onetwothree];
    return comPlay;
}

//整個body
const body = document.querySelector('#body');

//排版用div
const container = document.createElement('div');
body.appendChild(container);
container.setAttribute("class", "container");

//玩家選擇鈕
const btnRock = document.createElement('button');
btnRock.setAttribute("class", "buttons");
const btnPaper = document.createElement('button');
btnPaper.setAttribute("class", "buttons");
const btnScissors = document.createElement('button');
btnScissors.setAttribute("class", "buttons");
//加入DOM
btnScissors.textContent = "剪刀";
container.appendChild(btnScissors);
btnRock.textContent = "石頭";
container.appendChild(btnRock);
btnPaper.textContent = "布";
container.appendChild(btnPaper);


const btns = document.querySelectorAll('button');
btns.addEventListener('click', playRound(this.textContent, computerPlay()));



//一開始寫的時候玩家出拳跟電腦出拳的變數寫在全域，但這樣後續在函數裡連續呼叫playRound時並不會重取新的拳，
//因為只有建立變數時會執行取新拳的函式
/*let playerSelection = prompt("出拳吧paper、scissors、rock", "");
let computerSelection = computerPlay();*/

//判斷輸贏
function playRound(playerSelection, computerSelection) {
    let outcome;
    
    if (playerSelection === computerSelection){
        outcome = "平手";
    }else if (playerSelection === "布"){
        if (computerSelection === "剪刀"){
            outcome = "你輸惹";
        }else{
            outcome = "你贏了";
        }
    }else if (playerSelection === "剪刀"){
        if (computerSelection === "石頭"){
            outcome = "你輸惹";
        }else{
            outcome = "你贏了";
        }
    }else if (playerSelection === "石頭") {
        if (computerSelection === "布"){
            outcome = "你輸惹";
        }else{
            outcome = "你贏了";
        }
    }else{
        outcome = "請出正確的拳";
    }
    
    return outcome;
    console.log(outcome);
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

