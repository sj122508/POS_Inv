import { POSActionTypes } from "./pos.actionTypes";

export function setItemSelected(itemName) {
	return (dispatch) => {
		dispatch(SET_ITEM_SELECTED(itemName));
	};
}

export function setItemSelectedCount(count) {
	return (dispatch) => {
		dispatch(SET_ITEM_SELECTED_COUNT(count));
	};
}

export const SET_ITEM_SELECTED = (itemName) => ({
	type: POSActionTypes.SET_ITEM_SELECTED,
	payload: itemName,
});

export const SET_ITEM_SELECTED_COUNT = (count) => ({
	type: POSActionTypes.SET_ITEM_SELECTED_COUNT,
	payload: count,
});
