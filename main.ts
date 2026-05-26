import { evaluatePosition } from './evaluation';
import { initializeBoard, updateBoard, updateEvaluation } from './html-connector';

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

export function makeMove(move: number, player?: 'X' | 'O') {
	if (boardState[move] === '.') {
		boardState[move] = player ?? turn;
		moveEvals = [];
		switchTurn();
	}

	const { bestEval, evaluations } = evaluatePosition(boardState, turn);
	boardEval = bestEval;
	moveEvals = evaluations;
	updateEvaluation(boardEval);

	updateBoard(boardState, moveEvals);
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
