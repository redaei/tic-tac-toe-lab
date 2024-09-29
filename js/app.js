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
const resetBtnEl = document.getElementById("reset")

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false
  tie = false
  render()
  console.log(`winner: ${winner}, tie: ${tie}, turn: ${turn}`);
  
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
  // -If winner is false, but tie is true, render a tie message.
  else if (winner === false && tie === true){
    message.innerText = "Tie!"
  }
  // -Otherwise, render a congratulatory message to the player that has won.
  else {
    message.innerText = `Bravo! · ${turn} win!`
  }
  
  
}

const handleClick = (event) => {
  //test
  const squareIndex = event.target.id;
  if (board[squareIndex] ==="X" || board[squareIndex] ==="O" ){
    return
  } else if (winner) {
    return
  }
  else {
    console.log(squareIndex);
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
    //console.log(winner);
    
  }
  
  
}

const placePiece = (index) => {
  board[index] = turn
  updateBoard()
  
}

const checkForWinner = () => {
  for (let i = 0 ; i < winningCombos.length ; i++){
    if (board[winningCombos[i][0]] !=="" && board[winningCombos[i][0]] === board[winningCombos[i][1]] && board[winningCombos[i][0]] === board[winningCombos[i][2]]) {
      winner = true
      break
    }
     
  }
}

const checkForTie = () => {
  if (winner){
    return
  } else if (board.indexOf("")){
    return    
  } else {
    tie = true
  }
}

const switchPlayerTurn = () => {
  if (winner)
    return
  else {
    if (turn === "X")
      turn = "O"
    else turn = "X"

  }
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((sqr) => {
  sqr.addEventListener("click", (event) => {
  if (event.target.classList[0] === "sqr"){
    handleClick(event)
  }
})})

resetBtnEl.addEventListener("click" , (event)=> {
  init()
})

init()