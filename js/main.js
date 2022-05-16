function computerPlay(){
    let onetwothree = Math.round(Math.random()*2);
    const pst = ["paper", "scissors", "rock"];
    let comPlay = pst[onetwothree];
    console.log(comPlay);
}

computerPlay();