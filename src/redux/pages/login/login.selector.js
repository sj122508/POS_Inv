import { createSelector } from "reselect";

const selectLogin = (state) => state.login;

export const selectCurrentLogin = createSelector(
	[selectLogin],
	(login) => login
);
