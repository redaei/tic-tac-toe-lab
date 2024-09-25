/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
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
    squareEls[index].textContent = turn
  })
}
const updateMessage = () => {
  // -If both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is.
  // -If winner is false, but tie is true, render a tie message.
  // -Otherwise, render a congratulatory message to the player that has won.
}
/*----------------------------- Event Listeners -----------------------------*/
