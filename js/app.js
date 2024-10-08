/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const message = document.getElementById('message')
const resetBtnEl = document.getElementById('reset')

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false
  tie = false
  render()
  console.log(`winner: ${winner}, tie: ${tie}, turn: ${turn}`)
}

const render = () => {
  updateBoard()
  updateMessage()
}

const updateBoard = () => {
  board.forEach((sqr, index) => {
    squareEls[index].textContent = board[index]
    if (squareEls[index].textContent === 'O') {
      squareEls[index].classList.add("selectedO")
      squareEls[index].classList.add("noHover")
    } else if (squareEls[index].textContent === 'X') {
      squareEls[index].classList.add("selectedX") 
      squareEls[index].classList.add("noHover") 
    }
    else {
      squareEls[index].classList.remove("selectedX") 
      squareEls[index].classList.remove("selectedO") 
      squareEls[index].classList.remove("noHover")
      document.querySelector(".board").classList.remove("noHover")
    }
  })
}

const updateMessage = () => {
  // -If both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is.
  if (!winner && !tie) {
    message.innerText = turn
    message.classList.remove("messageTie")
    message.classList.remove("messageWinX")
    message.classList.remove("messageWinO")
  }
  // -If winner is false, but tie is true, render a tie message.
  else if (winner === false && tie === true) {
    message.innerText = 'Tie!'
    message.classList.add("messageTie")
  }
  // -Otherwise, render a congratulatory message to the player that has won.
  else {
    message.innerText = `Bravo! · ${turn} win!`
    document.querySelector(".board").classList.add("noHover")
    if (turn === "X")
      message.classList.add("messageWinX")
    else message.classList.add("messageWinO")
  }
}

const handleClick = (event) => {
  //test
  const squareIndex = event.target.id
  if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
    return
  } else if (winner) {
    return
  } else {
    console.log(squareIndex)
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
  for (let i = 0; i < winningCombos.length; i++) {
    if (
      board[winningCombos[i][0]] !== '' &&
      board[winningCombos[i][0]] === board[winningCombos[i][1]] &&
      board[winningCombos[i][0]] === board[winningCombos[i][2]]
    ) {
      winner = true
      break
    }
  }
}

const checkForTie = () => {
  if (winner) {
    return
  } else if (board.indexOf('') !== -1) {
    return
  } else {
    tie = true
  }
}

const switchPlayerTurn = () => {
  if (winner) return
  else {
    if (turn === 'X') turn = 'O'
    else turn = 'X'
  }
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((sqr, index) => {
  sqr.addEventListener('mouseenter', (event) => {
    if (board[index] === '') {
      event.target.innerText = turn
    }
  })
  sqr.addEventListener('mouseleave', (event) => {
    if (board[index] === '') {
      event.target.innerText = ''
    }
  })
  sqr.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'sqr') {
      handleClick(event)
    }
  })
})

resetBtnEl.addEventListener('click', (event) => {
  init()
})

init()
