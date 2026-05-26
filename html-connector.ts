import { CellState, Evaluation, makeMove } from './main';

export const initializeHtmlElements = () => {};

export function initializeBoard() {
	const boardElement = document.getElementById('board');
	if (boardElement) {
		const cells = boardElement.querySelectorAll('.cell');
		cells.forEach((cell, index) => {
			cell.addEventListener('click', () => makeMove(index));
		});
	}

	const evalbutton = document.getElementById('evalbutton');

	// if (evalbutton) {

	// evalbutton?.addEventListener('click', () => {
	// 	const { bestEval, evaluations } = evaluatePosition(boardState, turn);
	// 	boardEval = bestEval;
	// 	moveEvals = evaluations;
	// 	updateEvaluation();
	// 	updateBoard();
	// });
	// }
}

export function updateBoard(boardState: CellState[], moveEvals: { move: number; eval: Evaluation }[]) {
	const boardElement = document.getElementById('board');
	if (!boardElement) {
		throw new Error('Missing board element');
	}

	const cells = boardElement.querySelectorAll('.cell');
	for (let index = 0; index < cells.length; index += 1) {
		const value = boardState[index] ?? '.';
		const cell = cells[index];
		const moveEvaluation = moveEvals.find((entry) => entry.move === index)?.eval ?? null;
		const isFilled = value !== '.';
		const hasEvaluation = moveEvaluation !== null;

		cell.textContent = isFilled ? value : hasEvaluation ? moveEvaluation : '';
		cell.style.backgroundColor = isFilled
			? value === 'X'
				? 'red'
				: 'blue'
			: moveEvaluation === 'X'
				? '#ffcccc'
				: moveEvaluation === 'O'
					? '#cce0ff'
					: moveEvaluation === 'D'
						? '#d9d9d9'
						: 'transparent';
		cell.style.color = hasEvaluation && !isFilled ? '#777' : 'black';
	}
}

export function updateEvaluation(boardEval: Evaluation | null) {
	const evaluationElement = document.getElementById('evaluation');
	// const moveEvalsElement = document.getElementById('move-evals');
	// if (!evaluationElement || !moveEvalsElement) {
	if (!evaluationElement) {
		throw new Error('Missing evaluation elements');
	}

	evaluationElement.innerHTML = boardEval ?? '??';

	// moveEvalsElement.innerHTML = '';
	// moveEvals.forEach(({ move, eval: evaluation }) => {
	// 	const moveEval = document.createElement('div');
	// 	moveEval.textContent = `${move + 1}: ${evaluation}`;
	// 	moveEvalsElement.appendChild(moveEval);
	// });
}
