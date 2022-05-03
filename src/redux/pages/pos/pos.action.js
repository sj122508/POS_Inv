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

export function setItemSelectedPrice(price) {
	return (dispatch) => {
		dispatch(SET_ITEM_SELECTED_PRICE(price));
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

export const SET_ITEM_SELECTED_PRICE = (price) => ({
	type: POSActionTypes.SET_ITEM_SELECTED_PRICE,
	payload: price,
});
