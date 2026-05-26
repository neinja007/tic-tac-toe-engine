import { lookupEvaluation } from './evaluation';
import { showMsg } from './html-connector';
import { makeMove, resetBoardState } from './main';

export let botType = 'O' as 'X' | 'O';

export const switchBotType = () => {
	botType = botType === 'X' ? 'O' : 'X';
	resetBoardState();
};

export function makeBotMove() {
	if (window.boardState) {
		const { bestEval, evaluations } = lookupEvaluation(window.boardState, botType)!;
		const bestMoves = evaluations.filter((e) => e.eval === bestEval);
		if (bestEval === botType) {
			showMsg('lose');
		}
		if (bestMoves.length > 0) {
			const randomBestMove = bestMoves[Math.floor(Math.random() * bestMoves.length)];
			makeMove(randomBestMove.move, botType, false);
		}
	}
}
