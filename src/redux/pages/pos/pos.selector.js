import { createSelector } from "reselect";

const selectPOS = (state) => state.pos;

export const selectCurrentPOS = createSelector([selectPOS], (pos) => pos);
export const selectItemSelected = createSelector(
	[selectPOS],
	(pos) => pos.itemSelected
);
