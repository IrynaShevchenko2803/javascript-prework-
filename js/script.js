
function playGame(){
    clearMessages()

    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput); /*i did't see that in console */
    let playerMove = getMoveName(playerInput); /*user choice */
   
 

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber); /* Computer choice */

displayResult(computerMove, playerMove)
}


function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } 
    if(argMoveId == '2'){
        return 'papier';
    }
    if(argMoveId == '3'){
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch'; 
}


function displayResult(computerMove, playerMove){
    if (computerMove == playerMove){
        printMessage('Mamy ramis!')
    }
    let resultUserDiv = document.getElementById('resUser');
    let resultCompDiv = document.getElementById('resComp')
    if( (computerMove == 'kamień' && playerMove == 'papier')||
        (computerMove == 'papier' && playerMove == 'nożyce')||
        (computerMove == 'nożyce' && playerMove == 'kamień') 
    ){
        printMessage('Ty wygrywasz!', 'messages');
       resultUser++;
       resultUserDiv.innerText = resultUser
    }

    else{
        printMessage('Ty przegrywasz');
       resultComp++;
       resultCompDiv.innerText = resultComp
    }
}


/*if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber ==2){
    computerMove ='nozyce';
}

if(randomNumber ==3){
    computerMove ='papier';
}

console.log('Mój ruch to: ' + computerMove); /* need printMessage */





/*if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput =='2'){
    playerMove ='nozyce';
}
if(playerInput =='3'){
    playerMove ='papier';
}

console.log('Twój ruch to: ' + playerMove); /* need printMessage */



/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrawasz!');
}
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Mamy ramis!');
}
if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrawasz!'); 
}
if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}
if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Mamy ramis!'); 
}
if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Mamy ramis!'); 
}
if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrawasz!'); 
}
if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!'); 
}
if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch'); 
}
if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch'); 
}
if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch'); 
}*/






let playRock = document.getElementById('play-rock');
let playScissors = document.getElementById('play-scissors');
let playPaper = document.getElementById('play-paper');

let resultComp = 0;
let resultUser = 0;
/*
;*/
 
playRock.addEventListener('click', function (){playGame(1)});
playPaper.addEventListener('click', function (){playGame(2)});
playScissors.addEventListener('click', function (){playGame(3)});

clearMessages('messages');
clearMessages('res')




