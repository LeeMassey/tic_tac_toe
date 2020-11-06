const Gameboard = (() => {
	const board = [
		'x','x','x',
		'x','x','x',
		'x','x','x'
	];

	return {board};
})();

function renderBoardContents() {
	const gameCells = document.querySelectorAll('.game_cell');

	for(let i=0; i<Gameboard.board.length; i++) {
		gameCells[i].textContent = Gameboard.board[i];
	}
}

renderBoardContents();