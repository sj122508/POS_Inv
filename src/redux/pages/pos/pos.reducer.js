import { POSActionTypes } from "./pos.actionTypes";

const INITIAL_STATE = {
	itemSelected: "", // item name
	itemSelectedCount: "", //count
};

const posReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case POSActionTypes.SET_ITEM_SELECTED:
			return {
				...state,
				itemSelected: action.payload,
			};
		case POSActionTypes.SET_ITEM_SELECTED_COUNT:
			return {
				...state,
				itemSelectedCount: action.payload,
			};
		default:
			return state;
	}
};

export default posReducer;
