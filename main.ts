export type CellState = 'X' | 'O' | '.';
export type Evaluation = '+' | 'D' | '-';

// +: X is winning by force, if the right line is found
// D: The game is a draw, if the right lines are found
// -: O is winning by force, if the right lines are found

export const boardState: CellState[] = Array(9).fill('.');
let turn: 'X' | 'O' = 'X';

let evaluation: { move: number; eval: Evaluation }[] = [];

function switchTurn() {
	turn = turn === 'X' ? 'O' : 'X';
}

function updateBoard() {
	const boardElement = document.getElementById('board');
	if (!boardElement) {
		throw new Error('Missing board element');
	}

	const cells = boardElement.querySelectorAll('.cell');
	for (let index = 0; index < cells.length; index += 1) {
		const value = boardState[index] ?? '.';
		const cell = cells[index];
		const moveEvaluation = evaluation.find((entry) => entry.move === index)?.eval ?? null;
		const isFilled = value !== '.';
		const hasEvaluation = moveEvaluation !== null;

		cell.textContent = isFilled ? value : hasEvaluation ? moveEvaluation : '';
		cell.style.backgroundColor = isFilled
			? value === 'X'
				? 'red'
				: 'blue'
			: moveEvaluation === '+'
				? '#ffcccc'
				: moveEvaluation === '-'
					? '#cce0ff'
					: moveEvaluation === 'D'
						? '#d9d9d9'
						: 'transparent';
		cell.style.color = hasEvaluation && !isFilled ? '#777' : 'black';
	}
}

function updateEvaluation() {
	const evaluationElement = document.getElementById('evaluation');
	const moveEvalsElement = document.getElementById('move-evals');
	if (!evaluationElement || !moveEvalsElement) {
		throw new Error('Missing evaluation elements');
	}

	const findRelevantEvaluation =
		turn === 'X'
			? evaluation.some((e) => e.eval === '+')
				? '+'
				: evaluation.some((e) => e.eval === 'D')
					? 'D'
					: '+'
			: evaluation.some((e) => e.eval === '-')
				? '-'
				: evaluation.some((e) => e.eval === 'D')
					? 'D'
					: '+';

	evaluationElement.innerHTML = findRelevantEvaluation;

	moveEvalsElement.innerHTML = '';
	evaluation.forEach(({ move, eval: evaluation }) => {
		const moveEval = document.createElement('div');
		moveEval.textContent = `${move + 1}: ${evaluation}`;
		moveEvalsElement.appendChild(moveEval);
	});
}

function checkWinner(boardState: CellState[], player: 'X' | 'O'): Evaluation | null {
	const bswn = boardState.map((e) => (e === '.' ? 'G' : e));
	const across = bswn.map((p, i) => p + ((i + 1) % 3 === 0 ? '-' : '')).join('');
	const down = bswn[0] + bswn[3] + bswn[6] + '-' + bswn[1] + bswn[4] + bswn[7] + '-' + bswn[2] + bswn[5] + bswn[8];
	const cross = bswn[0] + bswn[4] + bswn[8] + '-' + bswn[2] + bswn[4] + bswn[6];
	const amalgamation = across + '-' + down + '-' + cross;

	return amalgamation.includes('XXX')
		? '+'
		: amalgamation.includes('OOO')
			? '-'
			: amalgamation.includes('G')
				? null
				: 'D';
}

export function evaluatePosition(
	boardState: CellState[],
	turn: 'X' | 'O',
	store: boolean = false
): { bestEval: Evaluation; evaluations: { move: number; eval: Evaluation }[] } {
	const evaluations: { move: number; eval: Evaluation }[] = [];
	if (checkWinner(boardState, turn) !== null) {
		// console.log(
		// 	'insta-evaluated ' +
		// 		boardState.map((e) => e ?? '.').join('') +
		// 		' (turn ' +
		// 		turn +
		// 		') as ' +
		// 		checkWinner(boardState, turn)
		// );
		return { bestEval: checkWinner(boardState, turn)!, evaluations: [] };
	}
	for (let move = 0; move < 9; move++) {
		if (boardState[move] !== '.') {
			continue;
		} else {
			evaluations.push({ move: move, eval: evaluateMove(boardState, move, turn) });
		}
	}

	if (store) {
		evaluation = evaluations;
	}

	const bestEval =
		evaluations.length === 0
			? 'D'
			: turn === 'X'
				? evaluations.some((e) => e.eval === '+')
					? '+'
					: evaluations.some((e) => e.eval === 'D')
						? 'D'
						: '-'
				: evaluations.some((e) => e.eval === '-')
					? '-'
					: evaluations.some((e) => e.eval === 'D')
						? 'D'
						: '+';

	// console.log('evaluated ' + boardState.map((e) => e ?? '.').join('') + ' (turn ' + turn + ') as ' + bestEval);

	return { bestEval, evaluations: evaluations };
}

export function evaluateMove(boardState: CellState[], move: number, turn: 'X' | 'O'): Evaluation {
	const nextBoardState = boardState.slice();
	nextBoardState[move] = turn;
	return evaluatePosition(nextBoardState, turn === 'X' ? 'O' : 'X').bestEval;
}

export function initializeBoard() {
	const boardElement = document.getElementById('board');
	if (!boardElement) {
		throw new Error('Missing board element');
	}
	const cells = boardElement.querySelectorAll('.cell');
	cells.forEach((cell, index) => {
		cell.addEventListener('click', () => {
			if (boardState[index] === '.') {
				boardState[index] = turn;
				evaluation = [];
				switchTurn();
				updateBoard();
			}
		});
	});

	const evalbutton = document.getElementById('evalbutton');

	evalbutton?.addEventListener('click', () => {
		evaluatePosition(boardState, turn, true);
		updateEvaluation();
		updateBoard();
	});
}
