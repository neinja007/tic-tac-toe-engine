import { CellState, evaluatePosition, Evaluation } from './main';
import Bun from 'bun';

function getPositionValue(boardState: CellState[]) {
	return Number(boardState.map((cell) => (cell === 'X' ? 2 : cell === 'O' ? 1 : 0)).join(''));
}

function getRotations(b: CellState[]) {
	return [
		[b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]],
		[b[2], b[5], b[8], b[1], b[4], b[7], b[0], b[3], b[6]],
		[b[8], b[7], b[6], b[5], b[4], b[3], b[2], b[1], b[0]],
		[b[6], b[3], b[0], b[7], b[4], b[1], b[8], b[5], b[2]]
	];
}

function getMirrors(b: CellState[]) {
	return [
		[b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]],
		[b[2], b[1], b[0], b[5], b[4], b[3], b[8], b[7], b[6]]
	];
}

function findIdealPosition(boardState: CellState[]) {
	const mirrors = getMirrors(boardState);
	const rotations = [...getRotations(mirrors[0]), ...getRotations(mirrors[1])];

	let maxValue = 0;
	let bestPosition = boardState;
	for (let position of rotations) {
		if (getPositionValue(position) > maxValue) {
			maxValue = getPositionValue(position);
			bestPosition = position;
		}
	}
	return bestPosition;
}

let positions: CellState[][] = [];
const cellStates = ['X', 'O', '.'] as const;

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

const initial = Array(9).fill(null);

getPossibleFollowups(initial);

console.log('Positions: ' + positions.length);

const optimizedPositions: CellState[][] = positions.reduce(
	(optimizedPositions: CellState[][], currentPosition: CellState[]) => {
		const idealPosition = findIdealPosition(currentPosition);
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
