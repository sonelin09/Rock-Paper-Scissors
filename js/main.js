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
const container2 = document.createElement('div');
body.appendChild(container2);




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

//為所有按鈕加上click後要執行的函式
const allBtns = document.querySelectorAll('button');
for (let i = 0; i<3; i++){
    allBtns[i].addEventListener('click', playRound);
}

const showOutcome = document.createElement('label');
//一開始寫的時候玩家出拳跟電腦出拳的變數寫在全域，但這樣後續在函數裡連續呼叫playRound時並不會重取新的拳，
//因為只有建立變數時會執行取新拳的函式
/*let playerSelection = prompt("出拳吧paper、scissors、rock", "");
let computerSelection = computerPlay();*/



//判斷輸贏
function playRound(playerSelection, computerSelection) {
    showOutcome.textContent = '';
    let outcome;
    playerSelection = playerSelection.target.textContent;
    console.log("玩家出" + playerSelection);
    computerSelection = computerPlay();
    console.log("電腦出" + computerSelection);
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
    showOutcome.textContent = outcome;
    container2.appendChild(showOutcome);
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

