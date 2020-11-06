const Gameboard = (() => {
	const board = [
		'','','',
		'','','',
		'','',''
	];

	return { board };
})();

const Player = (name, mark) => {
	return { name, mark };
}

const player1 = Player("Player1", "X");
const player2 = Player("Player2", "O");
let currentPlayer = player1;
let winner;
let winnerText;
const displayWinner = document.querySelector("#display_winner");

let gameOver = false;

const gameCells = document.querySelectorAll('.game_cell');

function renderBoardContents() {
	for(let i=0; i<Gameboard.board.length; i++) {
		gameCells[i].textContent = Gameboard.board[i];
	}
}

function newGame() {
	for(let i=0; i<Gameboard.board.length; i++) {
		Gameboard.board[i] = '';
	}
	gameOver = false;
	winner = null;
	winnerText = null
	displayWinner.innerHTML = '';
	currentPlayer = player1;
	renderBoardContents();
}

function checkForWinner() {
	const cells = Gameboard.board;
	const mark = currentPlayer.mark;
	if(
		(cells[0] === mark && cells[1] === mark && cells[2] === mark) || 
		(cells[3] === mark && cells[4] === mark && cells[5] === mark) || 
		(cells[6] === mark && cells[7] === mark && cells[8] === mark) || 
		(cells[0] === mark && cells[3] === mark && cells[6] === mark) || 
		(cells[1] === mark && cells[4] === mark && cells[7] === mark) ||
		(cells[2] === mark && cells[5] === mark && cells[8] === mark) || 
		(cells[0] === mark && cells[4] === mark && cells[8] === mark) || 
		(cells[6] === mark && cells[4] === mark && cells[2] === mark)
	) {
		winner = currentPlayer.name;
		winnerText = winner + " wins!! Game Over... Play again? " + "<button onclick='newGame()'>New Game</button>";
		displayWinner.innerHTML = winnerText;
		gameOver = true;
	}
}

function endTurn() {
	if(currentPlayer === player1) {
		currentPlayer = player2;
	}
	else {
		currentPlayer = player1;
	}
}

for(let i=0; i<gameCells.length; i++) {
	gameCells[i].addEventListener("click", function() {
		if(!gameOver) {
			if(Gameboard.board[i] === '') {
				Gameboard.board[i] = currentPlayer.mark;
				renderBoardContents();
				checkForWinner();
				endTurn();
			}
		}
	});
}