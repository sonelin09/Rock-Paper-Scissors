//電腦出拳
function computerPlay() {
    let onetwothree = Math.round(Math.random()*2);
    const pst = ["paper", "scissors", "rock"];
    let comPlay = pst[onetwothree];
    return comPlay;
}

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
    for (let i=0 ; i<5 ; i++ ){
        //把玩家出拳及電腦出拳的變數宣告搬到這裡來，每次才會出新的拳!!!
       let playerSelection = prompt("出拳吧paper、scissors、rock", "");//玩家出拳由prompt取
       let computerSelection = computerPlay()
       let output = playRound(playerSelection, computerSelection);
       if(output === "你贏了"){
            win += 1;
       }else if (output === "你輸惹"){
            lose += 1;
       }else if (output === "平手"){
            tie += 1;
       }else{
            wrong += 1;
       }
       console.log(playerSelection);
       console.log(computerSelection);
       console.log(output);
    };
    
    return "贏了" + win + "次；" + "輸了" + lose + "次；" + "平手" + tie + "次；" + "亂出" + wrong + "次。";
}


console.log(game());

/*console.log("玩家出拳:" + playerSelection);
console.log("電腦出拳:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

