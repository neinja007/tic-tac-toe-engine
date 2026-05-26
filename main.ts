import { checkWinner, lookupEvaluation } from './evaluation';
import { initializeBoard, showMsg, updateBoard, updateEvaluation } from './html-connector';

export type CellState = 'X' | 'O' | '.';
export type Evaluation = 'X' | 'O' | 'D';

// X: X is winning by force, if the right line is found
// O: O is winning by force, if the right line is found
// D: The game is a draw, if the right lines are found

export const boardState: CellState[] = Array(9).fill('.');
let turn: 'X' | 'O' = 'X';

let moveEvals: { move: number; eval: Evaluation }[] = [];
let boardEval: Evaluation | null = null;

function switchTurn() {
	turn = turn === 'X' ? 'O' : 'X';
}

export function resetBoardState() {
	for (let i = 0; i < boardState.length; i++) {
		boardState[i] = '.';
	}
	turn = 'X';
	moveEvals = [];
	boardEval = null;
	updateBoard(boardState, moveEvals);
	updateEvaluation(boardEval);

	const loseMessage = document.getElementById('lose-msg');
	if (loseMessage) {
		loseMessage.style.display = 'none';
	}

	const endMessage = document.getElementById('end-msg');
	if (endMessage) {
		endMessage.style.display = 'none';
	}
}

export function makeMove(move: number, player?: 'X' | 'O') {
	if (checkWinner(boardState) !== null) {
		showMsg('end');
		return;
	}
	if (boardState[move] === '.') {
		boardState[move] = player ?? turn;
		moveEvals = [];
		switchTurn();
	}

	if (document.getElementById('evaluation')) {
		const { bestEval, evaluations } = lookupEvaluation(boardState, turn)!;
		boardEval = bestEval;
		moveEvals = evaluations;
		updateEvaluation(boardEval);
	}
	updateBoard(boardState, moveEvals);
	if (checkWinner(boardState) !== null) {
		showMsg('end');
	}
}

declare global {
	interface Window {
		initializeBoard?: (initializeEval?: boolean) => void;
		boardState?: CellState[];
	}
}

if (typeof window !== 'undefined') {
	window.initializeBoard = initializeBoard;
	window.boardState = boardState;
}
