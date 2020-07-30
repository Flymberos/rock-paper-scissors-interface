
let pPoints=0;
let cPoints=0;

let playerWinner=true;
let computerWinner=true;
let tie=true;

function computerPlay(){
 let possibleChoices = ["Rock","Paper","Scissors"];
 let choice = Math.floor(Math.random()*possibleChoices.length);
 return possibleChoices[choice];
}

function playRound(playerChoice){

  let pChoice = playerChoice.toLowerCase();
  pChoice=pChoice.charAt(0).toUpperCase() + pChoice.slice(1);
  cChoice=computerPlay();

  if(pChoice == cChoice){
      return "tie"
  }else if(pChoice == "Rock" && cChoice == "Scissors" ){
      pPoints++;
      return "pwin";
  }else if(pChoice == "Rock" && cChoice == "Paper"){
      cPoints++;
      return "cwin";
  }else if(pChoice == "Paper" && cChoice == "Rock"){
      pPoints++;
      return "pwin";
  }else if(pChoice == "Scissors" && cChoice == "Rock"){
      cPoints++;
      return "cwin";
  }else if(pChoice == "Paper" && cChoice == "Scissors"){
      cPoints++;
      return "cwin"
  }else if(pChoice == "Scissors" && cChoice == "Paper"){
      pPoints++;
      return "pwin"; 
  }
}
    

//Query selector for available options
let optionsArray = document.querySelector(".main");

//Query selector for computer and player scores
let playerScore = document.querySelector(".score-count-player");
let computerScore = document.querySelector(".score-count-computer");
let winnerText = document.querySelector(".text-winner");

//Create event listener
optionsArray.addEventListener('click',doSomething);

//Define the function
function doSomething(e){
    let choice = e.target.id;
    let result=playRound(choice)

    if(pPoints==5){
        winnerText.innerHTML="Player wins the match!";
        pPoints=0;
        cPoints=0;
        playerScore.innerHTML=pPoints;
        computerScore.innerHTML=cPoints;
        winnerText.classList.add("text-winner-anim");
        winnerText.classList.remove("text-winner-anim");
    }else if(cPoints==5){
        winnerText.innerHTML="Computer wins the match!";
        pPoints=0;
        cPoints=0;
        playerScore.innerHTML=pPoints;
        computerScore.innerHTML=cPoints;
        winnerText.classList.add("text-winner-anim");
    }else if(result=="pwin"){
        pPoints++;
        winnerText.innerHTML="Players wins the round!";
        playerScore.innerHTML=pPoints;
    }else if(result=="cwin"){
        winnerText.innerHTML="Computer wins the round!";
        computerScore.innerHTML=cPoints;
    }
}




