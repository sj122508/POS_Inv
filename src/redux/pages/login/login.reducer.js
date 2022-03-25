import { LoginActionTypes } from "./login.actionTypes";

const INITIAL_STATE = {
	loginProgress: false,
	userProfile: [],
};

const userLoggin = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LoginActionTypes.GET_LOGGIN_START:
			return {
				...state,
				loginProgress: true,
				userProfile: action.payload,
			};
		case LoginActionTypes.GET_LOGGIN_FINISH:
			return {
				...state,
				loginProgress: false,
			};

		default:
			return state;
	}
};

export default userLoggin;
