  /*----- constants -----*/
  const cls = ["x", "o", "green"];
  
  //squareselect nodelist
  let squareSelect = document.querySelectorAll(".square");

  let player;
  let turn = 0;
  const WIN = false;

  
  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  //click event listener for each square 
for (const square of squareSelect) {
    square.addEventListener("click", boxClick);
    
}

//reset
let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener("click", reset)


  /*----- functions -----*/

 
function boxClick(event) {

  //if even turns, x, if odd turns, o
  if(turn % 2 == 0) {
    player = 'x';
  } else {
    player = 'o';
  }
  //if empty, add the toggled player and turn off new inputs, iterate turn, check score
  if(!event.target.classList.contains('x') && !event.target.classList.contains('o')) {
    event.target.classList.add(player);
    event.target.removeEventListener("click", squareSelect);
    turn++;
  }
   
  scoreCheck(player);

}

function scoreCheck(player) {
  
  //top row
  if(squareSelect[0].classList.contains(player) && squareSelect[1].classList.contains(player) && squareSelect[2].classList.contains(player)) {
  //  console.log('win');
   squareSelect[0].classList.add('green');
   squareSelect[1].classList.add('green');
   squareSelect[2].classList.add('green');
  document.querySelector('h2').innerText = `${player} wins`;
  WIN = true;
  }

  //middle row
  if(squareSelect[3].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[5].classList.contains(player)) {
   // console.log('win');
    squareSelect[3].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[5].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
    WIN = true;
  }
 
  //bottom row
  if(squareSelect[6].classList.contains(player) && squareSelect[7].classList.contains(player) && squareSelect[8].classList.contains(player)) {
   // console.log('win');
    squareSelect[6].classList.add('green');
    squareSelect[7].classList.add('green');
    squareSelect[8].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
    WIN = true;
  }

  //first column
  if(squareSelect[0].classList.contains(player) && squareSelect[3].classList.contains(player) && squareSelect[6].classList.contains(player)) {
 //   console.log('win');
    squareSelect[0].classList.add('green');
    squareSelect[3].classList.add('green');
    squareSelect[6].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
    WIN = true;
  }

  //second column
  if(squareSelect[1].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[7].classList.contains(player)) {
   // console.log('win');
    squareSelect[1].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[7].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
    WIN = true;
  }

  //third column
  if(squareSelect[2].classList.contains(player) && squareSelect[5].classList.contains(player) && squareSelect[8].classList.contains(player)) {
    console.log('win');
    squareSelect[2].classList.add('green');
    squareSelect[5].classList.add('green');
    squareSelect[8].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
    WIN = true;
  }

  //diagonal 1
  if(squareSelect[0].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[8].classList.contains(player)) {
  //  console.log('win');
    squareSelect[0].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[8].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
    WIN = true;
  }

  //diagonal 2
  if(squareSelect[2].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[6].classList.contains(player)) {
   // console.log('win');
    squareSelect[2].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[6].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
    WIN = true;
  }


  //draw condition
  if(turn === squareSelect.length && WIN == false) {
    document.querySelector('h2').innerText = `Draw`;
  }
}


//clears classes
function reset() {
    for (const sq of squareSelect) {
        sq.classList.remove(...cls);
    }
    document.querySelector('h2').innerHTML = '&nbsp;'
   // turn = 0; //turn off for new first player
  }
