import { LoginActionTypes } from "./login.actionTypes";

export function userLoggin(userCredential) {
	return (dispatch, getState) => {
		dispatch(GET_LOGGIN_START(userCredential));
		let start = getState().login.loginProgress;
		const inter = setInterval(() => {
			dispatch(GET_LOGGIN_FINISH());
			let stop = getState().login.loginProgress;
			clearInterval(inter);
		}, 5000);
	};
}

// Here is where you update or modify the global state
// Here also the http request
export const GET_LOGGIN_START = (userCredential) => ({
	type: LoginActionTypes.GET_LOGGIN_START,
	payload: userCredential,
});

export const GET_LOGGIN_FINISH = () => ({
	type: LoginActionTypes.GET_LOGGIN_FINISH,
});
