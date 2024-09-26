/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]
/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const message = document.getElementById("message")

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  render()
}

const render = () => {
  updateBoard()
  updateMessage()
}

const updateBoard = () => {
  board.forEach((sqr, index) => {
    squareEls[index].textContent = board[index]
  })
}

const updateMessage = () => {
  // -If both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is.
  if (!winner && !tie){
    message.innerText = turn
  }
  else if (winner === false && tie === true){
    message.innerText = "Tie!"
  }
  else {
    message.innerText = `Bravo! · ${turn} win!`
  }
  // -If winner is false, but tie is true, render a tie message.
  // -Otherwise, render a congratulatory message to the player that has won.
}

const handleClick = (event) => {
  //test
  console.log(event);
  
}
/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((addEventListener('click', (event)=>{
  handleClick(event)
})))