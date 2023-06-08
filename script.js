  /*----- constants -----*/
  const cls = ["x", "o", "green"];
  
  //squareselect nodelist
  let squareSelect = document.querySelectorAll(".square");
  let board = document.querySelector("board")

  //array of values taken from squareselect nodelist
  let arrFrom = Array.from(squareSelect.values());
  //let arrFrom = [...squareSelect]

  //let firstRow = arrFrom.slice(0,2);

 // let firstrow = [0,1,2];
  let topRowMap = [0,1,2].map(i => squareSelect[i]);


  let player;
  let turn = 0;

  


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

  //console.log([0,1,2].map(i=>squareSelect[i].classList.contains(player)));

  
  //console.log(topRowMap);
  
  //top row
  // if(squareSelect[0].classList.contains(player) && squareSelect[1].classList.contains(player) && squareSelect[2].classList.contains(player)) {
  //   console.log('win');
  //  squareSelect[0].classList.add('green');
  //  squareSelect[1].classList.add('green');
  //  squareSelect[2].classList.add('green');
  //   document.querySelector('h2').innerText = `${player} wins`;
  // }

  //middle row
  if(squareSelect[3].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[5].classList.contains(player)) {
   // console.log('win');
    squareSelect[3].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[5].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
  }
 
  //bottom row
  if(squareSelect[6].classList.contains(player) && squareSelect[7].classList.contains(player) && squareSelect[8].classList.contains(player)) {
   // console.log('win');
    squareSelect[6].classList.add('green');
    squareSelect[7].classList.add('green');
    squareSelect[8].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
  }

  //first column
  if(squareSelect[0].classList.contains(player) && squareSelect[3].classList.contains(player) && squareSelect[6].classList.contains(player)) {
 //   console.log('win');
    squareSelect[0].classList.add('green');
    squareSelect[3].classList.add('green');
    squareSelect[6].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
  }

  //second column
  if(squareSelect[1].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[7].classList.contains(player)) {
   // console.log('win');
    squareSelect[1].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[7].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
  }

  //third column
  if(squareSelect[2].classList.contains(player) && squareSelect[5].classList.contains(player) && squareSelect[8].classList.contains(player)) {
    console.log('win');
    squareSelect[2].classList.add('green');
    squareSelect[5].classList.add('green');
    squareSelect[8].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
  }

  //diagonal 1
  if(squareSelect[0].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[8].classList.contains(player)) {
  //  console.log('win');
    squareSelect[0].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[8].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
  }

  //diagonal 2
  if(squareSelect[2].classList.contains(player) && squareSelect[4].classList.contains(player) && squareSelect[6].classList.contains(player)) {
   // console.log('win');
    squareSelect[2].classList.add('green');
    squareSelect[4].classList.add('green');
    squareSelect[6].classList.add('green');
    document.querySelector('h2').innerText = `${player} wins`;
  }

  //draw condition
  if(turn === squareSelect.length) {
   for (const square of squareSelect) {
     if(square.classList.contains('x').length == square.classList.contains('o').length) {
        document.querySelector('h2').innerText = `Draw`;
      }
    }
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

