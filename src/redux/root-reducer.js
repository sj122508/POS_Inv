import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./pages/login/login.reducer";
import posReducer from "./pages/pos/pos.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["login", "pos"],
};

const rootReducer = combineReducers({
	login: loginReducer,
	pos: posReducer,
});

export default persistReducer(persistConfig, rootReducer);
