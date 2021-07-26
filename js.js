

function startGame(yourChoice){
    
  let humChoice = yourChoice.id,
      botChoice = randBotChoice(randNumChoice()),
      result = decideWinner(humChoice,botChoice);
  let message = finalMessage(result);
    
      showMessage(humChoice,botChoice,message);

      setTimeout(function () {
        location.reload()
      },2500)
}
 
function randNumChoice() {
  return Math.floor(Math.random() * 3);
}

function randBotChoice(randNum) {
  return ['rock','paper','sissor'][randNum];
}

function decideWinner(frstChoice,secChoice) {
  let rpsRules = {
    'rock':{'paper':0,'sissor':1,'rock':0.5},
    'sissor':{'paper':1,'sissor':0.5,'rock':0},
    'paper':{'paper':0.5,'sissor':0,'rock':1}
  }
  let yourScore = rpsRules[frstChoice][secChoice],
      borScore  = rpsRules[secChoice][frstChoice];
  return [yourScore,borScore]
}

function finalMessage([urScore,btScore]) {
  if(urScore === 0){
    return {'message':"You've lost !",'bgcolor':"#eb3b5a"}
  }else if (urScore === 0.5){
    return {'message':"Draw !",'bgcolor':"#1e90ff"}
  }else{
    return {'message':"You've won !",'bgcolor':"#2ed573"}
  }
}

function showMessage(urChoice,btChoice,fnMsg) {
  let eltsDB = {
    'rock': document.getElementById('rock'),
    'sissor': document.getElementById('sissor'),
    'paper': document.getElementById('paper')
  }
  
  let flex = document.getElementById('flex');
  
  flex.innerHTML='';
  flex.appendChild(eltsDB[urChoice]);
  flex.appendChild(eltsDB[btChoice]);

  eltsDB[urChoice].disabled = true;
  eltsDB[btChoice].disabled = true;

  document.getElementById('message').innerHTML = fnMsg['message'];
  document.getElementById('message').style.backgroundColor = fnMsg['bgcolor'];
}