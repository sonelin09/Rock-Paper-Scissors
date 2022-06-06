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
const playerText = document.createElement('p');
playerText.textContent = "玩家請選擇要出的拳：";
playerText.setAttribute("class", "plytxt");
body.appendChild(playerText);
const container = document.createElement('div');
body.appendChild(container);
container.setAttribute("class", "container");
const container2 = document.createElement('div');
container2.setAttribute("class", "container2");
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


//紀錄玩家、電腦、此次輸贏、累積輸贏次數
const plySlct = document.createElement('label');
const cptSlct = document.createElement('label');
const showOutcome = document.createElement('label');
showOutcome.setAttribute("class", "output");
let nowScore = [0, 0, 0];
const total = document.createElement('label');


//一開始寫的時候玩家出拳跟電腦出拳的變數寫在全域，但這樣後續在函數裡連續呼叫playRound時並不會重取新的拳，
//因為只有建立變數時會執行取新拳的函式
/*let playerSelection = prompt("出拳吧paper、scissors、rock", "");
let computerSelection = computerPlay();*/

//上次出拳的畫面洗掉
function reStart() {
    plySlct.textContent = '';
    cptSlct.textContent = '';
}

//顯示結果到畫面，5次後會將累積次數歸零
function judge(){
    if (nowScore[0] === 5) {
        showOutcome.textContent = '喔耶!贏了!';
        body.appendChild(showOutcome);
        for(let i = 0; i<3; i++){
            nowScore[i] = 0;
        }
    }else if (nowScore[1] === 5){
        showOutcome.textContent = '呵呵，輸了';
        body.appendChild(showOutcome);
        for(let i = 0; i<3; i++){
            nowScore[i] = 0;
        }
    }else if (nowScore[2] === 5){
        showOutcome.textContent = '打了個平手~';
        body.appendChild(showOutcome);
        for(let i = 0; i<3; i++){
            nowScore[i] = 0;
        }
    }else{
        showOutcome.textContent = '目前贏:' + nowScore[0] + '次；' + 
        '目前輸:' + nowScore[1] + '次；' + '平手:' + nowScore[2] + '次';
        body.appendChild(showOutcome);
        console.log('目前贏:' + nowScore[0] + '次；' + 
        '目前輸:' + nowScore[1] + '次；' + '平手:' + nowScore[2] + '次');
    }
}

//判斷輸贏
function playRound(playerSelection, computerSelection) {
    reStart();
    let outcome;
    playerSelection = playerSelection.target.textContent;
    //console.log("玩家出" + playerSelection);
    computerSelection = computerPlay();
    //console.log("電腦出" + computerSelection);
    if (playerSelection === computerSelection){
        outcome = "平手";
        nowScore[2] ++;
    }else if (playerSelection === "布"){
        if (computerSelection === "剪刀"){
            outcome = "你輸惹";
            nowScore[1] ++;
        }else{
            outcome = "你贏了";
            nowScore[0] ++;
        }
    }else if (playerSelection === "剪刀"){
        if (computerSelection === "石頭"){
            outcome = "你輸惹";
            nowScore[1] ++;
        }else{
            outcome = "你贏了";
            nowScore[0] ++;
        }
    }else if (playerSelection === "石頭") {
        if (computerSelection === "布"){
            outcome = "你輸惹";
            nowScore[1] ++;
        }else{
            outcome = "你贏了";
            nowScore[0] ++;
        }
    }else{
        outcome = "請出正確的拳";
    }
    
    plySlct.textContent = "你出：" + playerSelection;
    container2.appendChild(plySlct);
    cptSlct.textContent = "電腦出：" + computerSelection;
    container2.appendChild(cptSlct);
    /*showOutcome.textContent = "結果：" + outcome;
    body.appendChild(showOutcome);*/
    judge();
    //console.log('目前贏:' + nowScore[0] + '次；' + '目前輸:' + nowScore[1] + '次；' + '平手:' + nowScore[2] + '次');

    return outcome;
}





/*console.log("玩家出拳:" + playerSelection);
console.log("電腦出拳:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));*/

