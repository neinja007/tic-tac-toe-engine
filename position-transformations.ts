import { CellState } from './main';

function getPositionValue(boardState: CellState[]) {
	return Number(boardState.map((cell) => (cell === 'X' ? 2 : cell === 'O' ? 1 : 0)).join(''));
}

export function getRotations(b: CellState[]) {
	return [
		[b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]],
		[b[2], b[5], b[8], b[1], b[4], b[7], b[0], b[3], b[6]],
		[b[8], b[7], b[6], b[5], b[4], b[3], b[2], b[1], b[0]],
		[b[6], b[3], b[0], b[7], b[4], b[1], b[8], b[5], b[2]]
	];
}

export function getMirrors(b: CellState[]) {
	return [
		[b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8]],
		[b[2], b[1], b[0], b[5], b[4], b[3], b[8], b[7], b[6]]
	];
}

export function findIdealPosition(boardState: CellState[]): {
	position: CellState[];
	mirror: boolean;
	rotation: number;
} {
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

	const index = rotations.indexOf(bestPosition);

	return { position: bestPosition, mirror: index < 4 ? false : true, rotation: ((index + 1) % 4) - 1 };
}
