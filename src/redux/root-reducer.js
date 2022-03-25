import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./pages/login/login.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["login"],
};

const rootReducer = combineReducers({
	login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
