let randomnumber = parseInt(Math.random()*100+1);
const userinput = document.querySelector('#input');
const submit = document.querySelector('#submit');
const count = document.querySelector('#count');
const remain = document.querySelector('#remain');
const loworhigh = document.querySelector('#loworhigh');
const startover = document.querySelector('.resultparas');

const p = document.createElement('p');

let prevguess = []
let numguess = 1

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userinput.value);
        // console.log(guess);
        validateguess(guess);
        
    });
}

function validateguess(guess){
 
    if (isNaN(guess)){
    alert('please enter a valid number');
}  else if (guess  < 1) {
    alert('please enter a number more than 1');
}  else if (guess  > 100) {
    alert('please enter a number less than 100 ');
}  else {
    prevguess.push(guess);
    if (numguess === 11 ){
        displayguess(guess);
        displaymessage(`Game Over. random number was ${randomnumber}`);
        endgame();
    } 
    
    else {
        displayguess(guess);
        checkguess(guess);
    }
}
 
}

function checkguess(guess){
    if(guess === randomnumber){
        displaymessage(`You guessed it right`);
        endgame();
    } else if (guess < randomnumber){
        displaymessage(`Number is Tooo low `);
    } else if (guess > randomnumber){
        displaymessage(`Number is Tooo high `);
    }

}

function displayguess (guess) {
   userinput.value = ''
   count.innerHTML += `${guess},`;
   numguess++;
   remain.innerHTML = `Guesses Remaining : ${11-numguess}`;
}

function displaymessage(message){
 loworhigh.innerHTML = `<h2> ${message} </h2>`;

}



function endgame( ) {
   userinput.value = '';
   userinput.setAttribute('disabled','');
   p.classList.add('button');
   p.innerHTML = `<h2 class="newgame"> Start new game </h2>
                 <style> .newgame {
                  border: solid black;
                  color : black ; 
                  background-color : wheat } </style>`;
   startover.appendChild(p);
   playgame = false;
   newgame();
   
}


function newgame() {
    const newgameButton = document.querySelector('.newgame');
    newgameButton.addEventListener('click', function(event){
    randomnumber = parseInt(Math.random()*100+1);
    prevguess = [];
    numguess = 1;
    count.innerHTML = 'Previous Guesses :';
    remain.innerHTML = `Guesses Remaining : ${11-numguess}`;
    loworhigh.innerHTML = ``;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);

        playgame = true;


    });

}

