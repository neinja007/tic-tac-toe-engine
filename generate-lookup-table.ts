import { evaluatePosition } from './evaluation';
import { CellState, Evaluation } from './main';
import Bun from 'bun';
import { findIdealPosition } from './position-transformations';

function getPossibleFollowups(boardState: (CellState | null)[]): CellState[][] {
	const firstFreeCellIndex = boardState.indexOf(null);
	if (firstFreeCellIndex === -1) {
		positions.push(boardState as CellState[]);
		return [];
	} else {
		const firstPart = boardState.slice(0, firstFreeCellIndex);
		const secondPart = boardState.slice(firstFreeCellIndex + 1);
		const newPositions = cellStates.map((state) => [...firstPart, state, ...secondPart]);
		let positionFollowups: CellState[][] = [];
		newPositions.forEach((p) => {
			positionFollowups = [...positionFollowups, ...getPossibleFollowups(p)];
		});
		return positionFollowups;
	}
}

let positions: CellState[][] = [];
const cellStates = ['X', 'O', '.'] as const;

const initial = Array(9).fill(null);

getPossibleFollowups(initial);

console.log('Positions: ' + positions.length);

const optimizedPositions: CellState[][] = positions.reduce(
	(optimizedPositions: CellState[][], currentPosition: CellState[]) => {
		const idealPosition = findIdealPosition(currentPosition).position;
		if (optimizedPositions.some((pos) => pos.join('') === idealPosition.join(''))) {
			return optimizedPositions;
		} else {
			return [...optimizedPositions, idealPosition];
		}
	},
	[] as CellState[][]
);

const optimizedPositionsWithTurn: { position: CellState[]; turn: 'X' | 'O' }[] = [
	...optimizedPositions.map((pos) => ({ position: pos, turn: 'X' as const })),
	...optimizedPositions.map((pos) => ({ position: pos, turn: 'O' as const }))
];

console.log('Optimized positions: ' + optimizedPositions.length);

const evaluations: { [key: string]: { evaluation: Evaluation; moveEvaluations: string } } = {};

for (const { position, turn } of optimizedPositionsWithTurn) {
	const { bestEval, evaluations: evals } = evaluatePosition(position, turn);
	let moveEvaluations = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
	for (const moveEval of evals) {
		moveEvaluations[moveEval.move] = moveEval.eval;
	}
	evaluations[turn + '-' + position.join('')] = {
		evaluation: bestEval,
		moveEvaluations: moveEvaluations.join('')
	};
	console.log(Object.keys(evaluations).length + ' out of ' + Object.keys(optimizedPositionsWithTurn).length);
}

await Bun.write(new URL('./lookup-table.json', import.meta.url), JSON.stringify(evaluations, null, 2) + '\n');
