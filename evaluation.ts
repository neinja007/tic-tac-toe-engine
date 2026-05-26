import { CellState, Evaluation } from './main';

import lookupTable from './lookup-table.json';
import { findIdealPosition, getMirrors, getRotations } from './position-transformations';

export function checkWinner(boardState: CellState[]): Evaluation | null {
	const bswn = boardState.map((e) => (e === '.' ? 'G' : e));
	const across = bswn.map((p, i) => p + ((i + 1) % 3 === 0 ? '-' : '')).join('');
	const down = bswn[0] + bswn[3] + bswn[6] + '-' + bswn[1] + bswn[4] + bswn[7] + '-' + bswn[2] + bswn[5] + bswn[8];
	const cross = bswn[0] + bswn[4] + bswn[8] + '-' + bswn[2] + bswn[4] + bswn[6];
	const amalgamation = across + '-' + down + '-' + cross;

	return amalgamation.includes('XXX')
		? 'X'
		: amalgamation.includes('OOO')
			? 'O'
			: amalgamation.includes('G')
				? null
				: 'D';
}

export function evaluatePosition(
	boardState: CellState[],
	turn: 'X' | 'O'
): { bestEval: Evaluation; evaluations: { move: number; eval: Evaluation }[] } {
	const evaluations: { move: number; eval: Evaluation }[] = [];
	if (checkWinner(boardState) !== null) {
		// console.log(
		// 	'insta-evaluated ' +
		// 		boardState.map((e) => e ?? '.').join('') +
		// 		' (turn ' +
		// 		turn +
		// 		') as ' +
		// 		checkWinner(boardState, turn)
		// );
		return { bestEval: checkWinner(boardState)!, evaluations: [] };
	}
	for (let move = 0; move < 9; move++) {
		if (boardState[move] !== '.') {
			continue;
		} else {
			evaluations.push({ move: move, eval: evaluateMove(boardState, move, turn) });
		}
	}

	const bestEval =
		evaluations.length === 0
			? 'D'
			: turn === 'X'
				? evaluations.some((e) => e.eval === 'X')
					? 'X'
					: evaluations.some((e) => e.eval === 'D')
						? 'D'
						: 'O'
				: evaluations.some((e) => e.eval === 'O')
					? 'O'
					: evaluations.some((e) => e.eval === 'D')
						? 'D'
						: 'X';

	// console.log('evaluated ' + boardState.map((e) => e ?? '.').join('') + ' (turn ' + turn + ') as ' + bestEval);

	return { bestEval, evaluations: evaluations };
}

export function evaluateMove(boardState: CellState[], move: number, turn: 'X' | 'O'): Evaluation {
	const nextBoardState = boardState.slice();
	nextBoardState[move] = turn;
	return evaluatePosition(nextBoardState, turn === 'X' ? 'O' : 'X').bestEval;
}

export function lookupEvaluation(
	boardState: CellState[],
	turn: 'X' | 'O'
): { bestEval: Evaluation; evaluations: { move: number; eval: Evaluation }[] } | null {
	const { position, mirror, rotation } = findIdealPosition(boardState);

	const lookupKey = turn + '-' + position.join('');
	const lookupResult = lookupTable[lookupKey as keyof typeof lookupTable];

	const rotatedResult = getRotations(lookupResult.moveEvaluations.split('') as CellState[])[(4 - rotation) % 4];
	const mirroredResult = getMirrors(rotatedResult)[mirror ? 1 : 0];

	if (!lookupResult) {
		throw new Error('Position not found in lookup table: ' + lookupKey);
	}

	return {
		bestEval: lookupResult.evaluation as Evaluation,
		evaluations: mirroredResult
			.map((evalChar, index) => ({
				move: index,
				eval: evalChar as Evaluation | '.'
			}))
			.filter((e) => e.eval !== '.') as { move: number; eval: Evaluation }[]
	};
}
