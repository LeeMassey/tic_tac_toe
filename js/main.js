const Gameboard = (() => {
	const board = [
		'','','',
		'','','',
		'','',''
	];

	return {board};
})();

const Player = (name, mark) => {
	return { name, mark };
}

const player1 = Player("Player1", "X");
const player2 = Player("Player2", "O");
let currentPlayer = player1;

const gameCells = document.querySelectorAll('.game_cell');

for(let i=0; i<gameCells.length; i++) {
	gameCells[i].addEventListener("click", function() {
		if(Gameboard.board[i] === '') {
			Gameboard.board[i] = currentPlayer['mark'];
			if(currentPlayer === player1) {
				currentPlayer = player2;
			}
			else {
				currentPlayer = player1;
			}
			renderBoardContents();
		}
	});
}

function renderBoardContents() {
	for(let i=0; i<Gameboard.board.length; i++) {
		gameCells[i].textContent = Gameboard.board[i];
	}
}